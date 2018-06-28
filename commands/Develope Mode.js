const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {
var kitty = message.guild.members.find("id", "314165916264955904");
    if (message.member !== kitty)return message.channel.send("**Hey, `" + message.author.username + "` You Can't Set My Status To `Dnd` Only The `BotOwner` Can**");
    if (kitty) {
    Client.user.setStatus("dnd");
    message.channel.send("**My `BotOwner` Set My Status To `Dnd` That Means This Is The Mode I Go Into `Developing Mode`**");
    console.log("You Set My Status To Dnd");
    }
}

module.exports.help = {
  name:"Dev"
}
