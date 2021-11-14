let flowers = [];
let cars = [];
let maxCars = 20;
let state = 0;
let timer = 0;
let carsEaten = 0;
let Bee, Grass, Grass2, Yellowbackground;
let song1;
let frogPos;
let font1;

function preload() {
  song1 = loadSound("assets/Bee-noise.mp3");
}

function setup() {
  createCanvas(1000, 1000);
  font1 = loadFont("assets/Satisfy.ttf");
  song1.loop();
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  imageMode(CENTER);
  // initialize frog position
  frogPos = createVector(width / 2, height - 80);

  Bee = loadImage("assets/bee.png");
  Grass = loadImage("assets/grass.jpg");
  Grass2 = loadImage("assets/grass2.jpg");
  Yellowbackground = loadImage("assets/yellowbackground.jpg");
  flowers[0] = loadImage("assets/Flower.png");
  flowers[1] = loadImage("assets/Flower2.png");
}

function draw() {
  switch (state) {
    case 0: // welcome
      image(Grass, width / 2, height / 2, width, height);
      //background("yellow");
      fill("black");
      textFont(font1, 45);
      textAlign(CENTER);
      text("Welcome! Click to start and help the \n bee find as many flowers as you can.", width / 2, height / 2);
      //rect(250, 250, 100, 100);
      //make rectangle a button, but mouse x and y statement here
      // image(splashscreen, ....)
      break;

    case 1: // game state
      game();
      timer++;
      if (timer > 15 * 60) {
        state = 3;
        timer = 0;
      }
      break;

    case 2: // winning state
      background("green");
      fill("black");
      textFont(font1, 45);
      textAlign(CENTER);
      text("You WON!!!", width / 2, height / 2);
      break;

    case 3:
      image(Grass2, width / 2, height / 2, width, height);
      fill("black");
      textFont(font1, 45);
      textAlign(CENTER);
      text("You lost, please try again!", width / 2, height / 2);
      break; // losing state
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // the win state
      resetTheGame();
      state = 0;
      break;

    case 3: // the lose state
      resetTheGame();
      state = 0;
      break;
  }
}
//
// function mouseReleased() {
//   if (state == 2) {
//     state = 0;
//     song1.stop();
//     song1.play();
//   }
// }


function game() {
  image(Yellowbackground, width / 2, height / 2, width, height);
  //put in image here for background
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1); // this takes out a car
      carsEaten++;
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  // print out how many cars are left
  // fill("white");
  // textSize(16);
  // text(
  //   "cars left: " + cars.length + "  cars we collected = " + carsEaten, 20, 30);

  // make frog
  //fill("green");
  image(Bee, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();
}

function resetTheGame() {
  timer = 0;
  cars = [];
  //  carsEaten = 0 ; // if you want

  // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height - 120));
    this.vel = createVector(random(5), 0);
    this.cor = color(0, random(50, 100), random(190, 245), random(100));
    this.size = random(90);
    this.flowersNum = floor(random(2));
  }

  // methods
  display() {
    image(flowers[this.flowersNum], this.pos.x, this.pos.y, 100, 100);
    //image(Flower2, this.pos.x, this.pos.y, 225, 225);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
