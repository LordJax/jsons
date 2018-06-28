
module.exports.run = async (client,message,args) => {
    try {
      let user;
      if (message.mentions.users.size) {
        user = message.mentions.users.first();
      }
      else if (args.id) {
        user = await message.guild.fetchMember(args.id);
        if (user) {
          user = user.user;
        }
      }
      if (!user) {
        /**
        * The command was ran with invalid parameters.
        * @fires commandUsage
        */
        return client.emit('commandUsage', message, this.help);
      }
  
      let color, description;
      if (user.lastMessageID) {
        let lastSeen = Date.now() - user.lastMessage.createdTimestamp;
        let seconds = lastSeen / 1000;
        let days = parseInt(seconds / 86400);
        seconds = seconds % 86400;
        let hours = parseInt(seconds / 3600);
        seconds = seconds % 3600;
        let minutes = parseInt(seconds / 60);
        seconds = parseInt(seconds % 60);
  
        lastSeen = `${seconds}s`;
        if (days) {
          lastSeen = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
        else if (hours) {
          lastSeen = `${hours}h ${minutes}m ${seconds}s`;
        }
        else if (minutes) {
          lastSeen = `${minutes}m ${seconds}s`;
        }
  
    }
  
      message.channel.send({
        embed: {
          color: color,
          title: 'Last seen',
          description: `${lastSeen}`
        }
      }).catch(e => {
      
      });
    }
    catch (e) {
        console.log(e)
      
    }
  };
  
  
  module.exports.help = {
    name: 'Lseen',
  
  };
  