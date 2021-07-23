require('dotenv').config()

const express = require('express'),
      app = express(),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      consign = require('consign'),
      cors = require('cors')

const isProduction = process.env.NODE_ENV === 'production'

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ limit: '20mb', parameterLimit: 100000, extended: true }))
app.use(bodyParser.json({ limit: '20mb' }))
app.use(cookieParser())
app.use(cors())

consign({ cwd: 'app' })
      .include('setup')
      .then('api')
      .then('routes')
      .into(app)

// handle errors
app.use((err, req, res, next) => {
  if (!isProduction) {
    console.log('Ошибка: ', err)
  }

  if (err.status === 404)
    res.status(404).json({
      status: 400,
      message: "Страница не найдена!"
    })
  else if (err.status === 401) {
    res.status(401).json({
      status: 401,
      success: false,
      message: 'Вы не авторизованы!',
    })
  } else
    res.status(500).json({
      status: 500,
      message: "Что-то пошло не так!"
    })
})

module.exports = app
