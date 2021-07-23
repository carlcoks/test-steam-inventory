module.exports = (app) => {
  const api = require('../api/steam')

  app.route('/api/v1/steam')
    .post(api.getItem())
}
