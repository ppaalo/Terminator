// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config();
const { TOKEN } = process.env;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!a');
});

// Login to Discord with your client's token
client.login(TOKEN);