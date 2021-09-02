let Brett, Nashville, Tennis;

function setup() {
  createCanvas(800, 800);
  Brett = loadImage ("assets/Brett.jpg");
  Nashville = loadImage ("assets/Nashville.jpg");
  Tennis = loadImage ("assets/Tennis.jpg");
  imageMode (CENTER);
}

function draw() {
  background ('red');
  image (Brett, width/2, height/2, 200, 200);
  image (Nashville, width/2, height/2 - 220, 200, 200);
  image (Tennis, width/2, height/2 + 220, 200, 200);

}
