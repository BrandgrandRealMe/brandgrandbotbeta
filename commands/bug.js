var ids = ['465564943065022475', '531186390717825074'];
const customisation = require('../customisation.json');
module.exports = {
  name: 'bug',
  description: 'Reports a bug.',
  usage: 'bug <bug>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
      if (!args[0]) return message.reply("Please specify the bug. Example:\n`/invite Is not sending a msg!`");
    if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`/invite Is not sending a msg!`");
    args = args.join(" ");
    message.reply("Thanks for submitting a bug!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get(customisation.bugchannelid).send(content)
  }
};