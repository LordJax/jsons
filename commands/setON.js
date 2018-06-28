const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    
var OGON = message.guild.members.find("id", "314165916264955904");
if(message.member !== OGON)return message.channel.send("you do not have the proper permissions to use this command");
if(OGON) {
client.user.setStatus("online");
message.channel.send('My Master set my status to **Online**');
console.log('you set my status to online');
}


}
module.exports.help = {
    name: "seton"
}

