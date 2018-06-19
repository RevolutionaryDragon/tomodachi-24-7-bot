const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have any permission to do that!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can not be kicked!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("!!KICKED!!")
  .setColor("#e56b00")
  .addField("KICKED USER", `${kUser} with ID ${kUser.id}`)
  .addField("KICKED BY", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("KICKED IN", message.channel)
  .addField("TIME", message.createdAt)
  .addField("REASON", kReason);

  let logsChannel = message.guild.channels.find(`name`, "logs");
  if(!logsChannel) return message.channel.send("Seems like that channel are not exist yet.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

}
  module.exports.help = {
   name:"kick"
}
