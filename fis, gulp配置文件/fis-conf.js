fis.match('::package', {
	postpackager: fis.plugin('loader', {
		resourceType: 'mod',
		obtainScript: false,
		allInOne: false,
		useInlineMap: true
	})
});

// 清除其他配置，只保留如下配置
fis.match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
	optimizer: fis.plugin('png-compressor')
});

// fis.media('debug').match('*.{png,js,css,jpeg,jpg,gif,ttf}', {
//     useHash: true,
// });
//
// fis.media('online').match('*.{png,js,css,jpeg,jpg,gif,ttf}', {
//     useHash: true,
//     domain: 'http://101.231.83.157:8087/finance-wapweb'
// });

fis.match('*.{png,js,css,jpeg,jpg,gif,ttf}', {
	useHash: true,
});

fis.match('::package', {
	packager: fis.plugin('map', {
		'dist/pack/common.js': [
			'lib/esl/1.8.2/esl.js',
			'lib/esl/config.js',
			'lib/jquery/2.1.1/jquery.js',
			'lib/template/3.0.0/template.js',
			'dist/script/hoss.js',
			'dist/script/xhr.js',
			'dist/script/mui.min.js',
			'dist/script//global-util.js',
			'dist/script/system-message.js',
			'dist/script/spin.js',
			'dist/script/get-query-string.js',
			'dist/script/md5.js',
			'dist/script/cookie.js',
			'dist/script/tools/base64.js',
			'dist/script/tools/utf8.js',

		],
		'dist/pack/index.js': [
			'login/after-login.js',
			'dist/script/index.js',
		],
		'dist/pack/bridge-loan.js': [
			'dist/script/choose-city.js',
			'dist/script/location-city.js',
			'dist/script/loan-util.js',
			'dist/script/date-extend.js',
			'dist/script/loan.js',
			'dist/script/mobiscroll_date.js',
			'dist/script/mobiscroll.js',
			'dist/script/bridge-loan.js',
		],
		
		'dist/pack/main.css':[
			'dist/style/mui.min.css',
			'dist/style/base.css'
		]
		
	})

})

//
//fis.match('::package', {
//packager: fis.plugin('deps-pack', {
//
//  'dist/pack/index.js': [
//
//    // main.js 的所有同步依赖加入队列
//    'dist/script/index.js:deps',
//
////    // 将 main.js 所以异步依赖加入队列
////    '/static/hello/src/main.js:asyncs',
////
////    // 移除 comp.js 所有同步依赖
////    '!/static/hello/src/comp.js:deps'
//  ],
//
//})
//});

var script = 'dist/script';

fis.hook('amd', {
	globalAsyncAsSync: true,
	baseUrl: '/',
	paths: {
		// 路径配置 简化路径
		'script': 'dist/script',
		// 别名配置 简化模块标识符
		'jquery': 'lib/jquery/2.1.1/jquery',
		'template': 'lib/template/3.0.0/template',
		'hoss': script + '/hoss',
		'xhr': script + '/xhr',
		'system-message': script + '/system-message',
		'date-extend': script + '/date-extend',
		'fileupload': script + '/ajaxfileupload',
		'mui': script + '/mui.min',
		'common': script + '/common',
		'header-menu': script + '/header-menu',
		'chooseCity': script + '/choose-city',
		'locationCity': script + '/location-city',
		'md5': script + '/md5',
		'globalUtil': script + '/global-util',
		'getQueryString': script + '/get-query-string',
		'jcrop': script + '/jquery.jcrop',
		'cookie': script + '/cookie',
		'iscroll': script + '/iscroll',
		'mobiScroll': script + '/mobiscroll',
		'mobiScrollDate': script + '/mobiscroll_date',
		'dateExtend': script + '/date-extend',
		'loanUtil': script + '/loan-util',
		'gjjUtil': script + '/gjjUtil',
		'iosScroll': script + '/ios-scroll',
	}
});

fis.match('/dist/(*).js', {
	isMod: true,
})
fis.match('/lib/esl/1.8.2/esl.js', {
	useHash: false
})

fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
	relative: true
})