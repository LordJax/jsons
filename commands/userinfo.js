const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let icon = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This Is " + message.author.username + " User Infomation")
        .setColor("#5499C7")
        .setThumbnail(icon)
        .addField("Full Username", message.author.tag)
        .addField("ID", message.author.id)
      
    message.channel.send({embed: embed});
}

module.exports.help = {
  name:"userinfo"
}
