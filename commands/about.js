  var ids = ['465564943065022475', '531186390717825074'];
module.exports = {
  name: 'about',
  description: 'Get Info About The Bot!',
  execute: async (message, args, client, db, packageInfo, Discord) => {
   message.delete();
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('About The Bot', `Brandgrand!bot Is A Bot Made by Brandgrand!real It is written with Discord.js. `)
  .addField('It Has:', `---`)
   .addField('Mod Commands!', '``/ban``, ``/Kick``, ``/Mute``, ``/nick``, ``/purge``, And ``/lockdown``')
    .addField('Fun Commands!', '``/8ball``, ``/work``, ``/bal``, ``/coinflip``, ``/dadjoke``, And ``/today``')
     .addField('Util Commands!', '``/announce``, ``/emoji``, ``/say``, ``/whois``, And ``/serverinfo``')
  .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
  message.channel.send({embed});
  }
};
