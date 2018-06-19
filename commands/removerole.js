const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have any permission to do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("That role doesn't exist here.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Sad, you lost the ${gRole.name} role.`)
  }catch(e){
    message.channel.send(`Sad.. to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "removerole"
}
