var ids = ['465564943065022475', '531186390717825074'];
module.exports = {
  name: 'say',
  description: 'Make The Bot Say Somthing!',
  usage: 'say <message>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
  const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
};