const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const my_schema = new Schema({
    name: String,
});

const model = mongoose.model('User', my_schema);

module.exports = model;