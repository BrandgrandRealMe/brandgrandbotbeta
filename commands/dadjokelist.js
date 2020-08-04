var ids = ['465564943065022475', '531186390717825074'];
const dadjoke = require('../data/dadjoke.json');
module.exports = {
  name: 'dadjokelist',
  description: 'Get the list of dadjokes!',
  usage: 'dadjoke',
  execute: async (message, args, client, db, packageInfo, Discord) => {
        message.channel.send(`${message.author.toString()} Ok!`);
 
    for (i in dadjoke.jokes) {
    joke = dadjoke.jokes[i];
    message.channel.send(joke);
}
   message.channel.send(`${message.author.toString()} Done!`);
        }
    
};