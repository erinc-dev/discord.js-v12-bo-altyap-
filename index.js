const Discord = require('discord.js')
const client = new Discord.Client();
var prefix = ayarlar.prefix;
var author = ayarlar.sahip;

client.on('ready', () => {
    console.log(`Botunuz ${client.user.tag} Aktif Edildi!`)
})

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });

client.login(ayarlar.token);