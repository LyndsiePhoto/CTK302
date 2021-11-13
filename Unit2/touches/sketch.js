let numberOfTouches;
Let Grass, Flower, Sun;

function setup() {
  createCanvas(600, 800);
  Grass = loadImage("assets/Grass.jpg");
  Flower = loadImage("assets/Flower.jpg");
  Sun = loadImage("assets/Sun.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22);
      break;

    case 1:
      text("it's kind of lonely here", 5, 22);
      image(Grass, width / 2, height / 2, 600, 800);
      // put a picture here
      break;

    case 2:
      text("it is a beautiful day in the neighborhood for two", 5, 22);
      image(Flower, width / 2, height / 2, 600, 800);
      // put a picture here
      break;

    case 3:
      text("three friends are touching the screen", 5, 22);
      image(Sun, width / 2, height / 2, 600, 800);
      // put a picture here
      break;


  }

}
