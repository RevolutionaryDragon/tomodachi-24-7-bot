const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("REPORTS")
    .setColor("ff0000")
    .addField("REPORTED USER", `${rUser} with ID: ${rUser.id}`)
    .addField("REPORTED BY", `${message.author} with ID: ${message.author.id}`)
    .addField("CHANNEL", message.channel)
    .addField("TIME", message.createdAt)
    .addField("REASON", rreason);

    let reportschannel = message.guild.channels.find(`name`, "report");
    if(!reportschannel) return message.channel.send("Seems like that channel are not exist yet.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
