const express = require('express')
const registerRouter = express.Router()
const { getDataRegister, createDataRegister } = require('../controllers/RegisterController')

registerRouter.get("/register", getDataRegister)
registerRouter.post("/register", createDataRegister)


module.exports = registerRouter;