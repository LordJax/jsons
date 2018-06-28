const Discord = require("discord.js");
let giveaways = new Map();

module.exports.run = async (client,message,args) => {
  try {
    if (args.item) {
      if (giveaways.has(message.guild.id)) {
        return message.channel.send('error', '', client.i18n.error(message.guild.language, 'isEventInUse', 'giveaway'), message.channel);
      }
      args.item = args.item.join(' ');

      if (args.timeout < 1 || args.timeout > 12) {
        return message.channel.send('error', '', 'Giveaway can only run for at least an hour and at most 12 hours.', message.channel);
      }
      let reaction = [ '🎈', '🎊', '🎉', '🎃', '🎁', '🔮', '🎀', '🎐', '🏮' ];
      reaction = reaction[Math.floor(Math.random() * reaction.length)];

      let giveawayMessage = await message.channel.send({
        embed: {
          title: '🎉 GIVEAWAY! 🎉',
          description: `Giveaway event started. React to this message with ${reaction} to get a chance to win **${args.item}**.`,
          footer: {
            text: `Giveaway ID: ${message.guild.id} • Giveaway ends in ${args.timeout} hours from now.`
          }
        }
      });
      await giveawayMessage.react(reaction);
      let giveawayMessageID = giveawayMessage.id;
      let giveaway = client.setTimeout(async () => {
        try {
          giveawayMessage = await message.channel.fetchMessage(giveawayMessageID);
          let participants;
          if (giveawayMessage.reactions.has(reaction)) {
            participants = giveawayMessage.reactions.get(reaction).users.filter(user => !user.bot).map(u => u.id);
          }
          let winner;
          while (!winner && participants.length) {
            winner = participants[Math.floor(Math.random() * participants.length)];
            participants.splice(participants.indexOf(winner), 1);
            winner = await client.fetchUser(winner).catch(() => {});
          }
          if (winner) {
            giveawayMessage.edit({
              embed: {
                title: 'Giveaway Event Ended',
                description: `${winner} won **${args.item}**! And will be contacted by ${message.author.tag} with their reward.\nThank you everyone for participating. Better luck next time.`,
                footer: {
                  text: `Giveaway ID: ${message.guild.id}`
                }
              }
            }).catch(e => {
              if (e.code !== 50001) {
                
              }
            });
            winner.send({
              embed: {
                
                title: 'Congratulations',
                description: `You won the **${args.item}** in a giveaway you participated in **${message.guild.name}** Server!\nYou'll soon be contacted by ${message.author.tag} with your reward.`
              }
            }).catch(e => {
              if (e.code !== 50007) {

              }
            });
          }
          else {
            giveawayMessage.edit({
              embed: {
                title: 'Giveaway Event Ended',
                description: `Unfortunately, no one participated and apparently there's no winner for **${args.item}**. 😕`,
                footer: {
                  text: `Giveaway ID: ${message.guild.id}`
                }
              }
            }).catch(e => {
              if (e.code !== 50001) {

              }
            });
          }
          giveaways.delete(message.guild.id);
        }
        catch (e) {
        
        }
      }, args.timeout * 60 * 60 * 1000);
      giveaways.set(message.guild.id, giveaway);
    }
    else if (args.end) {
      if (giveaways.has(message.guild.id)) {
        client.clearTimeout(giveaways.get(message.guild.id));
        giveaways.delete(message.guild.id);
        message.channel.send({
          embed: {
            title: 'Giveaway Cancelled',
            description: `The giveaway event with ID **${message.guild.id}** has been cancelled by ${message.author.tag}`
          }
        }).catch(e => {
          
        });
      }
      else {
        return message.channel.send('error', '', 'There\'s no giveaway running in this server right now.', message.channel);
      }
    }
    else {
        return message.channel.send(embed)
    }
  }
  catch (e) {
    
  }
};

module.exports.help = {
    name: "giveaway"
}