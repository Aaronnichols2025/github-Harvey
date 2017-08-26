const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('MzUwODU3MDk0NDM1NzAwNzM3.DIKRsA.V8SL8-GowxQCLuO2XFyTx0rpmDs');


