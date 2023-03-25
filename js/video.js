var video;

//load page - Initialize the video element and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

//play video & update volume info
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

//pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("Current speed of video after slowing down is " + video.playbackRate);
});

//speed up video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("Current speed of video after speeding up is " + video.playbackRate);
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location of video is " + video.currentTime);
});

//mute video
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute Video");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});
//volume
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume is " + video.volume);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; 
});

//styled 
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Using oldSchool");
	video.classList.add("oldSchool");
});

//original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing oldSchool");
	video.classList.remove("oldSchool");
});