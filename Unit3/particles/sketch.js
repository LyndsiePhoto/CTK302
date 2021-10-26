let FalconRosesClass;
let cars = [];
let font1;

function setup() {
  createCanvas(500, 600);
  font1 = loadFont("assets/Carnevalee Freakshow.ttf");
  FalconRosesClass = loadImage("assets/FalconRosesClass.jpg");
  //imageMode(CENTER);
}

function draw() {
  image(FalconRosesClass, width / 2, height / 2, 500, 600);
  imageMode(CENTER);
  cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(5, 10);
    this.vel = createVector(random(1, 10), random(1, 10));
    this.a = random(200, 255);
    //this.color = color(random(255), random(255), random(255));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.size = random(15, 25);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    textFont(font1);
    textSize(this.size);
    text("Vintage", this.pos.x, this.pos.y, this.size, this.size);
  }
  move() {
    this.pos.add(this.vel);
    this.a -= 1;
    //if (this.pos.x > width) this.pos.x = 0;
    //if (this.pos.x < 0) this.pos.x = width;
    //if (this.pos.y > height) this.pos.y = 0;
    //if (this.pos.y < 0) this.pos.y = height;
  }
}
