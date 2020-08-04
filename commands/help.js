var ids = ['465564943065022475', '531186390717825074'];
module.exports = {
    name: 'help',
    description: '(The one you just ran!) List of all commands!',
    execute(message, args, client) {
const commands = client.commands;
      const data = [];
      if (args[0]) {const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return message.reply('That\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** -${command.name} ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true })} else {
      const cArray = client.commands.array();
      data.push(commands.map(command => command.name));
      console.log(data + ' data')
      //Create the embeds
      const Discord = require('discord.js');
      const MessageEmbed = Discord.MessageEmbed;
      const ownerEmbed = new MessageEmbed()
      .setTitle('Brandgrand!bot Owner Help‎')
      .setDescription('Brandgrand!bot Is A Bot Made by Brandgrand!real It is written with Discord.js.');
      
      const userEmbed = new MessageEmbed()
      .setTitle('Brandgrand!bot Help‎')// the ‎ does not show up i think
      .setDescription('Brandgrand!bot Is A Bot Made by Brandgrand!real It is written with Discord.js.');
      
      data.forEach(cmdd => {
cmdd.forEach(cmd => {
  if (cmd === 'eval' || cmd === 'asynceval') return;
      var dsc = commands.get(cmd).description;
      var ownerownly = commands.get(cmd).ownerownly;
          
        console.log(cmd);
                userEmbed.addField(cmd, dsc, true);
              ownerEmbed.addField(cmd, dsc, true)
          if (ownerownly) return;
              ownerEmbed.addField(cmd, dsc, true);
      });
         if (!ids.includes(message.author.id)) return:
      message.channel.send(ownerEmbed);
      else;
      message.channel.send(userEmbed);
        }); }
}
};

//══════════════HELP═══════════════
//⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀HELP⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀
// turn of inline
// ^bruh it'll fill up the whole screen when we get more commands if it isnt inline
//ok 
// ‎
// Btw whats ur github username
// Same as glitch BrAnDgRaNdReAl
// ok also im adding eval/
// btw 
// When you make commands
// press the 3 dots next to cmdtemplate and press duplicate