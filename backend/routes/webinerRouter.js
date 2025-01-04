const express = require('express')
const webinarRouter = express.Router()
const { getWebinar, createWebinar, updateWebinar } = require('../controllers/WebinarController')

webinarRouter.get("/webinar", getWebinar)
webinarRouter.post("/webinar", createWebinar)
webinarRouter.put("/webinar/:id", updateWebinar)


module.exports = webinarRouter;