module.exports = (app) => {
  const api = require('../api/index')

  app.route('/api')
    .get((req, res) => {
      res.send('Test Api')
    })
}
