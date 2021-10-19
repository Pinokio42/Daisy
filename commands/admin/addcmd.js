const db = require("quick.db");
const { MessageEmbed } = require('discord.js');

module.exports = {
  config: {
  name: "addcmd",
  aliases: ["acmd"],
  usage: "<cmd_name> <cmd_responce>",
  description: "Add guild custom commands",
  category: "admin",
  },
  run: async (bot, message, args) => {


    if(!message.member.hasPermission("ADMINISTRATOR")) return
    let NHPEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('***You need*** _MANAGE MESSAGES_ ***at your role for do that.***');
    message.channel.reply(NHPEmbed);

    let cmdname = args[0];

    if(!cmdname) return message.channel.send(`:x: You have to give command name, \`addcmd <cmd_name> <cmd_responce>\`
    `);

    let cmdresponce = args.slice(1).join(" ");

    if(!cmdresponce) return message.channel.send(`:x: You have to give command cmd responce, \`addcmd <cmd_name> <cmd_responce>\`\n\n**You can add the following variables - \n\`{user}\` - Author\n\`{user_tag}\` - Author Tag\n\`{user_name}\` - Author Username\n\`{user_ID}\` - Author ID\n\`{guild_name}\` - Guild Name\n\`{guild_ID}\` - Guild Id\n\`{memberCount}\` - Member Count\n\`{member_createdAtAgo}\` - Member Creation Time\n\`{member_createdAt}\` - Member Creation Date`);

    let database = db.fetch(`cmd_${message.guild.id}`)

    if(database && database.find(x => x.name === cmdname.toLowerCase())) return message.channel.send(":x: This command name is already added in guild custom commands.")

    let data = {
      name: cmdname.toLowerCase(),
      responce: cmdresponce
    }

    db.push(`cmd_${message.guild.id}`, data)

    return message.channel.send("Added **" + cmdname.toLowerCase() + "** as a custom command in guild.")


  }
}
