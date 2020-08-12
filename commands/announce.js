var ids = ['465564943065022475', '531186390717825074'];
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'mod',
  name: 'announce',
  description: 'announce something.',
  usage: 'announce <announcement>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
 if (!message.guild.systemChannel.permissionsFor(message.author).has('SEND_MESSAGES')) return;
   if (!args[0]) return message.reply('You need to imput a announce BOI');;
    if (args[0] === "bug") return message.reply("Please give a announce.");
    args = args.join(" ");
   message.delete();
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('ANNOUNCEMENT', args)
  .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
  message.guild.systemChannel.send({embed});
  }
};