const mongoose = require('mongoose');
const mongouri = process.env.MONGO_URI;

module.exports = next => {
    mongoose.connect(mongouri).then(() => {
        console.log('Connected to database!');
        next();
    });
};
