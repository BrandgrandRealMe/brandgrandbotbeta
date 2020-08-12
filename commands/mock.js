const converter = require('scuffed-text');
var ids = ['465564943065022475', '531186390717825074'];
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'fun',
  name: 'mock',
  description: 'Mock Someone',
  usage: 'mock <text>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
   const sayMessage = converter(args.join(" "));
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
};