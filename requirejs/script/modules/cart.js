define(function(require) {
	var $a = '';
	if (false) {
		$a = 'shop'
	} else {
		$a = 'common';
	}



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