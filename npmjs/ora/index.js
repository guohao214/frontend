const ora = require('ora')

const spinner = ora({
	text: 'loading',
	spinner: {
		interval: 500,
		frames: ['-', '__', '--']
	}
}).start()

setTimeout(() => {
	spinner.color = 'yellow'
	spinner.text = 'loading rainbows'

	spinner.stop()
}, 6000)
