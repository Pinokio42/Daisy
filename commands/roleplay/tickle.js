const Discord = require('discord.js');
const colors = require('../../Daisy/colors.json')
const superagent = require('superagent');

module.exports = {
  config: {
        name: 'tickle',
        description: 'tickle people',
        aliases: ["tickle"],
        usage: '<user>',
        category: "roleplay"
  },

  run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/tickle");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${message.author} tickles ${victim}`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send(embed);
        
    }
}
