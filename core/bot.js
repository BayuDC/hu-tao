const Discord = require('discord.js');

const token = process.env.BOT_TOKEN;
const prefix = process.env.BOT_PREFIX || '!';

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
    ],
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'ping') {
        await message.channel.send('Pong!');
    } else if (command == 'chat') {
        const [response] = await client.chat.sendAndAwaitResponse(args.join(' '));
        await message.channel.send(response.text);
    }
});

client.once('ready', () => {
    console.log(`Discord bot is ready`);
});

module.exports = chat => {
    client.chat = chat;
    client.login(token);
};
