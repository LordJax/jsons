const Discord = require("discord.js");
const google = require('google-it');


module.exports.run = async (client,message,args) => {

    if (!args) return message.channel.send('**Proper Usage: `OG.google` <google smth> **')
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {

    let googleembed = new Discord.RichEmbed()
    
    .addField(`Title`, `${results[0].title}`)
    .addField(`Link`, `${results[0].link}` )
    .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`)
    .addField(`Description`, `${results[0].snippet}`)
    .setTimestamp();
    //return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
    return message.channel.send(googleembed);
}).catch(error => {
    if (error) throw error;
});


}
module.exports.help = {
    name: "google"
}