var fs = require('fs');
var promise = require('bluebird');

var readFileAsync = function(path) {
	return new promise(function(fulfill, reject) {
		try {
			fs.readFile(path, 'utf8', function(err, content) {
				if (err)
					return reject(err)

				return fulfill(content)
			})
		} catch (e) {
			console.log(e)
		}
	})
}

readFileAsync('./index.html').then(function(content) {
	console.log(content);
}).then(function(content) {
	console.log('1')
	console.log(content)
	// 执行结果
	//1
	//undefined
}).then(function(content) {
	console.log(content)
	// 执行结果
	//undefined
})