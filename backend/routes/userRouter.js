const express = require('express')
const userRouter = express.Router()
const { getDataUser, createDataUser } = require('../controllers/UserController')

userRouter.get("/user", getDataUser)
userRouter.post("/user", createDataUser)
// webinarRouter.put("/event/:id", updateEvent)


module.exports = userRouter;