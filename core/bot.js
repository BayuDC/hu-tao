const Discord = require('discord.js');

const Chat = require('../models/chat');

const token = process.env.BOT_TOKEN;
const prefix = process.env.BOT_PREFIX || '!';

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
    ],
    partials: [
        Discord.Partials.Channel,
        Discord.Partials.Message,
        //
    ],
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command == 'ping') {
            await message.channel.send('[System] Pong!');
        } else if (command == 'chat') {
            const { id, username } = message.author;

            const chat = await Chat.findOne({ userId: id });
            if (chat) {
                const thread = await message.channel.threads.fetch(chat.threadId);
                await thread.send(`[System] <@${id}>`);

                return;
            }

            const thread = await message.startThread({ name: `${username}'s Room` });
            await Chat.create({ userId: id, threadId: thread.id });
            await thread.send('[System] Thread created!');
        }

        return;
    }

    // if (message.guild) return;

    // const [reply] = await client.chat.sendAndAwaitResponse(message.content);
    // await message.channel.send(reply.text);
});

client.once('ready', () => {
    console.log(`Discord bot is ready`);
});

module.exports = chat => {
    client.chat = chat;
    client.login(token);
};
