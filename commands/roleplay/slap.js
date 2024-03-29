const { MessageEmbed } = require("discord.js");
const nekos = require("nekos.life");
const colors = require('../../Daisy/colors.json')
const {
  sfw: { slap },
} = new nekos();

module.exports = {
  config: {
    name: "slap",
    description: "Get's a slap reaction!",
    aliases: ["SLAP", "Slap"],
    usage: "<user>",
    category: "roleplay"
  },

  run: async (client, message, args) => {
    const { url } = await slap().catch(() => {});

    if (!url) return message.channel.send(`Could not connect to nekos.life`);

    const embed = new MessageEmbed();

    if (
      message.mentions.members.size &&
      message.mentions.members.first().id === client.user.id
    ) {
      return message.channel.send(
        `${
          [`Ouch! How dare you slap me!`, `Stop that!`, `It hurts! ;-;`][
            Math.floor(Math.random() * 2)
          ]
        }`
      );
    } else if (
      message.mentions.members.size &&
      message.mentions.members.first().id === message.author.id
    ) {
      return message.channel.send(`Wai~ Seriously!?`);
    } else if (message.mentions.members.size) {
      return message.channel.send(
        embed
          .setColor(colors.uptime)
          .setDescription(
            `${message.member} slapped ${message.mentions.members.first()}!`
          )
          .setImage(url)
      );
    } else {
      return message.channel.send(
        `${message.member}, are you practicing to slap or something?`
      );
    }
  },
};
