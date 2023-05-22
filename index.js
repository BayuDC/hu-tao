const setupBot = require('./core/bot.js');
const setupWeb = require('./core/web.js');

(async () => {
    setupBot(await setupWeb());
})();
