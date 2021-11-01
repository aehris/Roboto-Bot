const Discord = require('discord.js');

const dotenv = require("dotenv");
dotenv.config();

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
 });


client.on('ready', () => {
    console.log('Roboto is online')
});


client.login(process.env.TOKEN);