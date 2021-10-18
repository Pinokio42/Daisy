const Discord = require('discord.js');
const colors = require('../../colors.json')
const superagent = require('superagent');

module.exports = {
  config: {
        name: 'hentai',
        description: 'hentai',
        aliases: ["hent"],
        usage: '<user>',
        category: "nsfw"
  },

  run: async (client, message, args) => {
if(!message.channel.nsfw) {
  const embed = new Discord.MessageEmbed()
        .setDescription("This channel dosen't support nsfw content")
    .setColor("ffd700")
  .setTimestamp()

  return message.reply(embed)
      
    } else {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/hentai");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${message.author} spamming hentai`)
          .setImage(body.url)
           .setTimestamp()
      
        message.channel.send(embed);
        
    }
}
}