// require ports and middleware
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const express = require('express')
const routes = require('./routes')

const PORT = process.env.PORT || 3001

// app.use() middleware here

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/', routes)

app.use(express.static(`${__dirname}/client/build`))
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
