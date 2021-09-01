const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const my_schema = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: 'User'
        }
    ]
});

const model = mongoose.model('Chat', my_schema);

module.exports = model;