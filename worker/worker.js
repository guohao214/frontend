self.onmessage = function( event ) {
	var num = event.data

	var t = setInterval( function() {
		self.postMessage( --num )

		if ( num <= 0 ) {
			clearInterval(t)
			self.close()
		}

	}, 1000)
}
