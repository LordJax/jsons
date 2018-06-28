
const Discord = require("discord.js");
var opus = require('opusscript');

module.exports.run = async (client,message,args) => {

    return new Promise((resolve, reject) => {
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t connect to your voice channel...');
        voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
    });


}
module.exports.help = {
    name: "join"
}
