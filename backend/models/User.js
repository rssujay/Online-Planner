const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    due: {
        type: String,
        required: true
    }
});

const UserSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    items: [itemSchema]
})

module.exports = {
    Item: mongoose.model("item", itemSchema),
    User: mongoose.model("user", UserSchema,'users')
}