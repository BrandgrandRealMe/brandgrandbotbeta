var ids = ['465564943065022475', '531186390717825074'];
const dadjoke = require('../data/dadjoke.json');
module.exports = {
  name: 'dadjoke',
  description: 'Get a dadjoke!',
  usage: 'dadjoke',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    args = args.join(" ");
    joke = dadjoke.jokes[Math.floor(Math.random() * dadjoke.jokes.length)];
      const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('DADJOKE!', joke)
  .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
  message.delete().catch(O_o=>{}); 
  message.channel.send({embed});
        }
    
};