const Discord = require("discord.js");




module.exports.run = async (client,message,args) => {
    var OGEVAL = message.guild.members.find("id", "314165916264955904");
    if (message.member !== OGEVAL)return message.channel.send("**Hey, `" + message.author.username + "` Eval is a Owner command!**");


    
    
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
//

//


    try{
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string"){
        evaled = require("util").inspect(evaled);
      }


        if (evaled.includes(client.token)){
            evaled = evaled.replace(client.token, "Nice try");
        }  


        


    


    let embed = new Discord.RichEmbed()
    .addField(`Input`, "***```" + code + "```***", true)
    .addField(`Output`, `\`\`\`js\n${evaled}\`\`\``)
    .setColor("#00ff94")// 
    .setTimestamp()



await message.channel.send(embed);
    
    } catch (err) {

    let errorEmbed = new Discord.RichEmbed()
    .addField(`Error`, "**```" + clean(err) + "```**", true)
    .setColor("#00ff94");

    message.channel.send(errorEmbed);
    }    
}
module.exports.help = {
    name: "eval"
}