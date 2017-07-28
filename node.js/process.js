process.on('exit', function (code) {
  console.log('code:' , code)
})

console.log('start')

console.log(process.argv)
console.log(process.execPath)