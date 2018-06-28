
module.exports.run = async (client,message,args) => {

  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No permissions");

    try {
      if (args.length > 0) {
        await message.guild.me.setNickname(args.join(' '));
  
        message.channel.send({
          embed: {
            description: `${client.user.username}'s nick is now set to **${args.join(' ')}** on this guild.`
          }
        }).catch(e => {
          console.log.error(e);
        });
      }
      else {
        await message.guild.me.setNickname('');
  
        message.channel.send({
          embed: {
            
            description: `${client.user.username}'s nick has been reset on this guild.`
          }
        }).catch(e => {
          console.log.error(e);
        });
      }
    }
    catch (e) {
      console.log.error(e);
    }
  };
  

  
  exports.help = {
    name: 'setNick',
    botPermission: '',
    userTextPermission: '',
    ownerOnly: true,
    userVoicePermission: '',
    usage: 'setNick [text]',

  };