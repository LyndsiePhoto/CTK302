let Couple1, Couple2, Couple3;
let state = 0;
let timer = 0;
let song1;

function preload() {
  song1 = loadSound("assets/Bee-noise.mp3");
}


function setup() {
  createCanvas(600, 800);
  Couple1 = loadImage("assets/couple1.jpg");
  Couple2 = loadImage("assets/couple2.jpg");
  Couple3 = loadImage("assets/couple3.jpg");
  imageMode(CENTER);
  song1.play();
}

function draw() {

  switch (state) {
    case 0:
      image(Couple1, width / 2, height / 2, 600, 800);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      image(Couple2, width / 2, height / 2, 600, 800);
      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      image(Couple3, width / 2, height / 2, 600, 800);
      break;
  }
}

function mouseReleased() {
  if (state==2){
    state=0;
    song1.stop();
    song1.play();
  }
}
  function touchStarted() {
    getAudioContext().resume();
  }
