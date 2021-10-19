const Discord = require('discord.js');
const colors = require('../../Daisy/colors.json')
const superagent = require('superagent');

module.exports = {
  config: {
        name: 'kiss',
        description: 'kiss people',
        aliases: ["kiss"],
        usage: '<user>',
        category: "roleplay"
  },

  run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/kiss");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${message.author} kiss ${victim}`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send(embed);
        
    }
}
