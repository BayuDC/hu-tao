const CharacterAI = require('node_characterai');
const Parser = require('node_characterai/parser');

const token = process.env.CAI_TOKEN;
const characterId = process.env.CAI_CHARACTER_ID;

module.exports = async () => {
    const characterAI = new CharacterAI();
    await characterAI.authenticateWithToken(token);

    console.log(`Character AI is ready`);

    return {
        async send(id, message) {
            const chat = await characterAI.createOrContinueChat(characterId, id);
            const [reply] = await chat.sendAndAwaitResponse(message);

            return reply.text;
        },
        async create() {
            try {
                const request = await characterAI.requester.request('https://beta.character.ai/chat/history/create/', {
                    body: Parser.stringify({
                        character_external_id: characterId,
                        history_external_id: null,
                    }),
                    method: 'POST',
                    headers: characterAI.getHeaders(),
                });
                if (!request.ok()) throw null;
                const response = await Parser.parseJSON(request);

                const id = response['external_id'];
                const message = response.messages[0].text;

                return { id, message };
            } catch (e) {
                console.log(e);
                return null;
            }
        },
    };
};
