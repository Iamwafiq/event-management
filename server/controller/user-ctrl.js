const User = require('../models/user-model')
const Event = require('../models/event-model')

loginUser = (req, res) => {
    const body = req.body.User;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }
    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
                user: user
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

createEvent = (req, res) => {
    const body = req.body.Event;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Event details Missing.',
        })
    }
    const event = new Event(body)
    if (!event) {
        return res.status(400).json({ success: false, error: err })
    }

    event.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: event._id,
                message: 'Event created!',
                user: event
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'Event not created!',
            })
        })
}

getEvents = async (req, res) => {
    await Event.find({}, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!event.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err))
}

module.exports = {
    loginUser,
    createEvent,
    getEvents,
};

