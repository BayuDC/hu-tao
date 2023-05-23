const setupBot = require('./core/bot.js');
const setupWeb = require('./core/web.js');
const setupDb = require('./core/db.js');

(async () => {
    // setupBot(await setupWeb());
    setupDb(() => {
        setupBot();
    });
})();
