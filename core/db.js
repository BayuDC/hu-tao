const mongoose = require('mongoose');
const mongouri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

module.exports = next => {
    mongoose.connect(mongouri, { dbName }).then(() => {
        console.log('Connected to database!');
        next();
    });
};
