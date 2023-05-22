const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

const token = process.env.CAI_TOKEN;
const characterId = process.env.CAI_CHARACTER_ID;
const conversationId = process.env.CAI_CONVERSATION_ID;

(async () => {
    await characterAI.authenticateWithToken(token);
    const chat = await characterAI.createOrContinueChat(characterId, conversationId);

    const response = await chat.sendAndAwaitResponse('Hi!');

    console.log(response[0]);
})();
