define(['module'], function(module) {
	var $a = '';
	if (false) {
		$a = 'shop'
	} else {
		$a = 'common';
	}

	//alert(module.config().color)

	var d = require(['shop'], function(...args) {
		console.log(args)
	})
	//var c = require([$a], function(a) {
	//	a.test();
	//});
	//console.log(c)
	//c.test();
	//alert(1)
	
	// require('common')

	

	//require($a)

//	require('test')
})