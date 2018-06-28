const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
var OG = message.guild.members.find("id", "314165916264955904");
if(message.member !== OG)return message.channel.send("you do not have the proper permissions to use this command");
if(OG) {
client.user.setStatus("invisible");
message.channel.send('My Master set my status to **invisible**, Only OfficialGamingOG can use me now.');
console.log('you set my status to invisible');
}
}
module.exports.help = {
    name: "setinv"
}

