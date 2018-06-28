const Discord = require('discord.js')

const superagent = require('superagent');
module.exports.run = async (client, message, args) => {
    console.log( message.author.username + "#"  + message.author.discriminator + ' Has Used The bug command in ' + message.guild.name)

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Please specify a bug!')
    const content = clean(`**${message.author.username}#${message.author.discriminator}** (User ID ${message.author.id}) reported a bug\n${bug}\nServer: **${message.guild.name}**\nID: **${message.guild.id}**`);
    const id = '428665479742357515';
    new Promise((resolve, reject) => {

          let BugedEmbed = new Discord.RichEmbed()
          .setTitle("Bug report!")

          .setDescription(content);
    client.guilds.get("428665479742357515").channels.get("455577755258454016").send(BugedEmbed)
      message.channel.send(`:white_check_mark: **${message.author.username}**, your bug report has successfully been submitted to OGBot Support for review. Thank you!.`)
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('There was an error while sending your bug report to OGBot Support. Please try again later.');
          } else {
            resolve(res);
          }
        });
    });
}  catch (err) {
console.log(err)
 }
}

module.exports.help = {
  name:"bug"
}