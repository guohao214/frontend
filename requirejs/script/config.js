requirejs.config({
	baseUrl:'script/',
	paths:{
		"cart": 'script/modules/cart',
		"shop": 'script/modules/shop',
		"common": 'script/modules/common',
		"test":"script/modules/common",
		"test1":"script/modules/common",
	},
	shim: {
		'test': {
			deps:['test1'],
			exports:'test'
		}
	}
})