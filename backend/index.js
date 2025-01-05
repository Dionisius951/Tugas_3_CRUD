const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const webinarRouter = require('./routes/webinarRouter')
const userRouter = require('./routes/userRouter')
const registerRouter = require('./routes/registerRouter')

app.use(express.json()); 
app.use(cors())

app.use('/', webinarRouter)
app.use('/', userRouter)
app.use('/', registerRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
