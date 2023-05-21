const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

const token = process.env.TOKEN;
const characterId = process.env.CHARACTER_ID;
const conversationId = process.env.CONVERSATION_ID;

(async () => {
    await characterAI.authenticateWithToken(token);
    const chat = await characterAI.createOrContinueChat(characterId, conversationId);

    const response = await chat.sendAndAwaitResponse('Hi!');

    console.log(response[0]);
})();
