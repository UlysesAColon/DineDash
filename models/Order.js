const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creat Schema
const OrderSchema = new Schema({
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
    }
});

module.exports = Order = mongoose.model('order', OrderSchema);