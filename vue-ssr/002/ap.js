const vue = require('vue')

module.exports = function createApp(context) {
  return new vue({
    data() {
      return {
        url: context.url
      }
    },
    template: `<div>URL： {{ url }}</div>`
  })
}