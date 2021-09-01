const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const my_schema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    file: String,
    date: Date,
});

const model = mongoose.model('Messages', my_schema);

module.exports = model;