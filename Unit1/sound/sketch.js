let song1;
function preload() {
  song1 = loadSound("assets/polaroidshutter.mp3");


}


function setup() {
  createCanvas(600, 600);
  song1.loop();
}


function draw() {
  background("white");
}


function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }


}


// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
