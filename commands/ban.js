const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You don't have any permission to do that!");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person is to powerfull to get banned!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("!!BANNED!!")
  .setColor("#bc0000")
  .addField("BANNED USER", `${bUser} with ID ${bUser.id}`)
  .addField("BANNED BY", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("BANNED IN", message.channel)
  .addField("TIME", message.createdAt)
  .addField("REASON", bReason);

  let logschannel = message.guild.channels.find(`name`, "logs");
  if(!logschannel) return message.channel.send("Seems like that channel are not exist yet.");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
  
}
  module.exports.help = {
   name:"ban"
}
