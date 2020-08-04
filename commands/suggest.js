const customisation = require('../customisation.json');
module.exports = {
  name: 'suggest',
  description: 'Suggests something.',
  usage: 'suggest <suggestion>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
   if (!args[0]) return message.reply('You need to imput a Suggestion BOI');;
    if (args[0] === "bug") return message.reply("Please give a suggestion.");
    args = args.join(" ");
    message.reply("Thanks for suggesting something!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) suggested:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get(customisation.suggestionchannelid).send(`${content}`)
  }
};