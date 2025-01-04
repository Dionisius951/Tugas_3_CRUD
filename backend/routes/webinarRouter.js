const express = require('express')
const webinarRouter = express.Router()
const { getWebinar, createWebinar, updateWebinar, deleteWebinar } = require('../controllers/WebinarController')

webinarRouter.get("/webinar", getWebinar)
webinarRouter.post("/webinar", createWebinar)
webinarRouter.put("/webinar/:id", updateWebinar)
webinarRouter.delete("/webinar/:id", deleteWebinar)


module.exports = webinarRouter;