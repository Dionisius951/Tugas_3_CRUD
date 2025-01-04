const express = require('express')
const app = express()
const port = 4000
const webinarRouter = require('./routes/webinarRouter')
const userRouter = require('./routes/userRouter')
const registerRouter = require('./routes/registerRouter')

app.use(express.json()); 

app.use('/', webinarRouter)
app.use('/', userRouter)
app.use('/', registerRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
