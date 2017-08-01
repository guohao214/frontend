const vue = require('vue'),
    server = require('express')(),
    renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new vue({
    data: {
      url: req.url,
      init: 1
    },
    template: require('fs').readFileSync('./template.html', 'utf-8')
  })


  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('error')
      return
    }


    res.end(`
      <!DOCTYPE html>
      <html>
        <meta charset="utf-8">
        <body> ${html}</body>
      </html>
    `)

  })


})

server.listen(8080)