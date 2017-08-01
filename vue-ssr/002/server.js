const createApp = require('./ap.js')

var server = require('express')(),
    renderer = require('vue-server-renderer').createRenderer()


server.get('*', (req, res) => {
  const context = { url: req.url }
  const app = createApp(context)
  renderer.renderToString(app, (err, html) => {
    res.end(html)
  })
}).listen(8080)