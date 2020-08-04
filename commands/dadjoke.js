var ids = ['465564943065022475', '531186390717825074'];
const dadjoke = require('../data/dadjoke.json');
module.exports = {
  name: 'dadjoke',
  description: 'Get a dadjoke!',
  usage: 'dadjoke',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    args = args.join(" ");
    message.channel.send(`${dadjoke[Math.floor(Math.random() * dadjoke.length)]}`);
        }
    
};