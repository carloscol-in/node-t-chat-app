const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const my_schema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const Model = mongoose.model('Messages', my_schema);

module.exports = Model;