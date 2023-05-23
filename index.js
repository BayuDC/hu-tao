const setupBot = require('./core/bot.js');
const setupWeb = require('./core/web.js');
const setupDb = require('./core/db.js');

setupDb(async () => {
    setupBot(await setupWeb());
});
