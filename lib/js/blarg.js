var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#maindiv button");



function enableLoop() { 
  vid.loop = true;
  vid.load();
} 
function disableLoop() { 
  vid.loop = false;
  vid.load();
} 
function checkLoop() { 
    alert(vid.loop);
} 
function pause() {
	vid.pause();
}
function mute() {
	vid.muted = true;
}

function vidFade() {
  vid.classList.add("stopfade");
}

pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

