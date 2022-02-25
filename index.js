const express = require('express')
const mongoose = require('mongoose')
const corsMiddleware = require('./middleware/cors.middleware')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(corsMiddleware)
app.use(express.json({ extended: true }))
app.use('/api', require('./routes/shorturl.route'))
app.use('/', require('./routes/redirect.route'))

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URL),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }

    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
  } catch (error) {
    console.error(error)
  }
}

start()
