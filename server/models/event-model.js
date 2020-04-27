const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventData = new Schema(
    {
        title: { type: String, required: true },
        location: { type: String, required: true },
        date: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        description: { type: String, default: null},
    },
)

module.exports = mongoose.model('event', EventData)