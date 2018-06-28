const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const Fortnite = require("fortnite");
const FT = new Fortnite("0884042e-221e-4b8d-a3bb-2bfcd95a5381");



module.exports.run = async (client,message,args) => {


    let username = args[0];
    let platform = args[1] || "pc";

    FT.getInfo(username, platform).then(data => {
        let stats = data.lifetimeStats;
        let kills = stats.find(s => s.stat == 'kills');
        let kd = stats.find(s => s.stat == 'kd');
        let wins = stats.find(s => s.stat == 'wins');
        let win = stats.find(s => s.stat == 'win');
        let t5 = stats.find(s => s.stat == 'top5s');
        let mPlayed = stats.find(s => s.stat == 'matchesPlayed');

        let statsEmbed = new Discord.RichEmbed()
            .setTitle("Fortnite Stats | :chart_with_upwards_trend:")
            .setAuthor(data.username)
            .setColor("#33e502")
            .addField("Kills", `\`\`\`${kills.value}\`\`\``, true)
            .addField("KD", `\`\`\`${kd.value}\`\`\``, true)
            .addField("Wins", `\`\`\`${wins.value}\`\`\``, true)
            .addField("Win", `\`\`\`${win.value}\`\`\``, true)
            .addField("Top 5's", `\`\`\`${t5.value}\`\`\``, true)
            .addField("Matches played", `\`\`\`${mPlayed.value}\`\`\``, true);

        message.channel.send(statsEmbed);
    }).catch(e => {
        
        message.channel.send("Couldn't find that username.");
    });



  }

module.exports.help = {
    name: "fortnite"
}