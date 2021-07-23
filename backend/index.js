const app = require('./config/app')

app.listen(process.env.PORT, () => {
  console.log(`API running on ${process.env.PORT}`)
})
