self.onmessage = function( event ) {
	console.log(self)
	var num = event.data

  self.postMessage(num)


  //
	// var t = setInterval( function() {
	// 	self.postMessage( --num )
  //
	// 	if ( num <= 0 ) {
	// 		clearInterval(t)
	// 		self.close()
	// 	}
  //
	// }, 1000)
}
