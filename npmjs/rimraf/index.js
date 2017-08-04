var rm = require('rimraf')

var rmPath = './tmp'

rm(rmPath, function(err) {
	console.log(err)
})
