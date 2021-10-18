const Discord = require('discord.js');
const colors = require('../../colors.json')
const superagent = require('superagent');

module.exports = {
  config: {
        name: 'laugh',
        description: 'Laughing',
        aliases: ["lgh"],
        usage: '<laugh>',
        category: "roleplay"
  },

  run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.best/api/v1/laugh");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${message.author} laughing.`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send(embed);
        
    }
}