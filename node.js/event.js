var events = require('events'),
    emitter = new events.EventEmitter();


emitter.on('newListener', function () {
  console.log(arguments[1])
})

var fs = require('fs');
emitter.on('readFile', function () {

  // 异步读取
  fs.readFile('event1.js', function (err, data) {
    if (err){
      console.log(err.stack);
      return;
    }

    //console.log(data) buffer
    console.log(data.toString())
  })
})


// 绑定
emitter.on('show', function () {
  console.warn('show')
})

// 1s后触发
setTimeout(function () {
  emitter.emit('show')
}, 0)


emitter.emit('readFile')

console.log('run over')