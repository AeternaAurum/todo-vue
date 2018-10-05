const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const todo = require('./routes/todo')(router)
const MONGO_URI = "mongodb://localhost:27017/vuetodo"

const PORT = 5000

mongoose.connect(MONGO_URI, {useNewUrlParser:true}, err => {
  if (err) console.log(err)
  else console.log(`You have connected to ${MONGO_URI}`)
})

app.use(cors({
  origin: 'http://localhost:8080'
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

app.use('/todo', todo)

app.listen(PORT, () => console.log(`Listening on port localhost:${PORT}`))