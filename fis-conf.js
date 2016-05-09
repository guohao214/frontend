fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        obtainScript: false,
        allInOne: false,
        useInlineMap: true
    })
});
fis.match('*.{png,js,css,jpeg,jpg,gif,ttf}', {
    useHash: true
});

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
        'loanUtil': script + '/loan-util'
    }
});

fis.match('/dist/(*).js', {
    isMod: true,
})
fis.match('/lib/esl/1.8.2/esl.js', {
    useHash: false
})