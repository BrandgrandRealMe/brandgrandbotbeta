var ids = ['465564943065022475', '531186390717825074'];
const customisation = require('../customisation.json');
var randomCat = require('random-cat');
module.exports = {
  catagory: 'fun',
  name: 'cat',
  description: 'Get A Random Image Of A Cat!',
  usage: 'cat <dummyText>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
if (!args[0])
var url = randomCat.get();
else
var url = randomCat.get({
  dummyText: args
});
const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Here Is A Random Cat Image!')
	.setImage(url)
	.setTimestamp()
	.setFooter('!cat | Brandgrand!bot Beta');
message.channel.send(embed);
  }
};