const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    threadId: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Chat', schema);
