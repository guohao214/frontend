var music = document.getElementById('music'),
	music_play  = document.getElementById('music_play'),
	page1 = document.getElementById('page1'),
	page2 = document.getElementById('page2'),
	page3 = document.getElementById('page3'),
	audio = document.getElementsByTagName('audio')[0];


// music.onclick = function() {

// 	if (audio.paused) {
// 		audio.play();
// 		// music_play.setAttribute('class', 'play');
// 		// 4.4一下不兼容，iphone不支持
// 		music_play.style.animationPlayState = 'running';
// 		music_play.style.webkitAnimationPlayState = 'running';
// 	} else {
// 		audio.pause();
// 		// music_play.setAttribute('class', '');
// 		// 4.4一下不兼容，iphone不支持
// 		music_play.style.animationPlayState = 'paused';
// 		music_play.style.webkitAnimationPlayState = 'paused';
// 	}
// }

// 播放结束
audio.addEventListener('ended', function() {
		music_play.style.animationPlayState = 'paused';
		music_play.style.webkitAnimationPlayState = 'paused';
}, false);


music.addEventListener('touchstart', function() {
		if (audio.paused) {
		audio.play();
		// music_play.setAttribute('class', 'play');
		// 4.4一下不兼容，iphone不支持
		music_play.style.animationPlayState = 'running';
		music_play.style.webkitAnimationPlayState = 'running';
	} else {
		audio.pause();
		// music_play.setAttribute('class', '');
		// 4.4一下不兼容，iphone不支持
		music_play.style.animationPlayState = 'paused';
		music_play.style.webkitAnimationPlayState = 'paused';
	}
})


page1.addEventListener("touchstart", function(event) {
	page1.style.display = 'none';
	page2.style.display = 'block';
	page3.style.display = 'block';
	page3.style.top = '100%';

	setTimeout(function() {
		page2.setAttribute('class', "page fadeOut");
		page3.setAttribute('class', "page fadeIn");
	}, 5500)
}, false)

// page2.addEventListener("touchstart", function(event) {
// 	page2.style.display = 'none';
// 	page3.style.display = 'block';
// }, false)
