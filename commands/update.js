var ids = ['465564943065022475', '531186390717825074'];
const update = require('../data/update.json');
module.exports = {
  catagory: 'owner',
  name: 'update',
  description: 'Get the change logs! OWNER OWNLY!',
  usage: 'dadjoke',
  owneronly: true,
  execute: async (message, args, client, db, packageInfo, Discord) => {
    if (!ids.includes(message.author.id)) return;
 if (!args[0])
 message.channel.send(`${message.author.toString()} What Update?`);
 else if (args[0] == "2.0")
    for (i in update.ver2) {
    updates = update.ver2[i];
    message.channel.send(updates);
}
   message.channel.send(`${message.author.toString()} Done!`);
        }
    
};