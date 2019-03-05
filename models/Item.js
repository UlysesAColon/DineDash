const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creat Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    order: {
        type: String,
        required: false
    },
    number: {
        type: Number,
        required: false
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);