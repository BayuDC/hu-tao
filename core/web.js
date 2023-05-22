const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

const token = process.env.CAI_TOKEN;
const characterId = process.env.CAI_CHARACTER_ID;
const conversationId = process.env.CAI_CONVERSATION_ID;

module.exports = async () => {
    await characterAI.authenticateWithToken(token);
    const chat = await characterAI.createOrContinueChat(characterId, conversationId);

    console.log(`Character AI is ready`);

    return chat;
};
