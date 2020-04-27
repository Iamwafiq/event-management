const express = require('express')

const UserCtrl = require('../controller/user-ctrl')

const router = express.Router()

router.post('/createEvent', UserCtrl.createEvent)
router.post('/loginUser', UserCtrl.loginUser)
router.get('/getEvents', UserCtrl.getEvents)

module.exports = router