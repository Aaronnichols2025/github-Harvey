const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'your bot token here';


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('guildMemberAdd', member => {
 
  member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);


  const channel = member.guild.channels.find('name', 'member-log');
  
   if (!channel) return;
  
   channel.send(`Welcome to the server, ${member}`);
    
  });
 

client.on('guildMemberRemove', member => {
 
  member.guild.defaultChannel.send(`Bye bye, ${member}!`);


  const channel = member.guild.channels.find('name', 'member-log');
  
   if (!channel) return;
  
   channel.send(`Bye bye, ${member}`);
    
  });


client.login('MzUwODU3MDk0NDM1NzAwNzM3.DIKRsA.V8SL8-GowxQCLuO2XFyTx0rpmDs');


