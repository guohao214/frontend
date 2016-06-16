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
	// 返回一个值，下面的then也能够执行
	return 'good';
}).then(function(content) {
	console.log(content)
})