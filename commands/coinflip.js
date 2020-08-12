var ids = ['465564943065022475', '531186390717825074'];
module.exports = {
  catagory: 'fun',
  name: 'coinflip',
  description: 'flip a coin!',
  usage: 'coinflip',
  execute: async (message, args, client, db, packageInfo, Discord) => {
      let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
      message.channel.send('Heads!');
    }
    else {
      message.channel.send('Tails!');
    }
  }
};