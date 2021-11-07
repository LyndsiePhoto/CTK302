var bubbles = [];
let url = "";
let Brett;

function setup() {
  let key = "12fTQEsTw34zwK8ksRyyuQBvGje6INczFrQDCeM08O1M"; // this is KEY of the URL from the sheet

  // let key = '1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0'; // //this is KEY of the URL from the sheet

  //12fTQEsTw34zwK8ksRyyuQBvGje6INczFrQDCeM08O1M

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  Brett = loadImage("assets/Brett.jpg");

  // Regular setup code we usually have
  createCanvas(1000, 600);
  //imageMODE(CENTER);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);



}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your favorite type of live performance?"],
        data[i][
          "How many live performance have you been to in the last 5 years?"
        ]
      )
    ); // THESE NEED TO MATCH SPREADSHEET
  }
}

function draw() {
  image(Brett, 0, 0 / 2, width, height);
  //background("blue");
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(live, number) {
    // only the order of these parameters matters!
    this.live = live;
    this.number = number;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 4), 0);
  }

  display() {
    fill("white");
    noFill();
    ellipse(this.pos.x, this.pos.y, 85, 85);
    fill("white");
    text(this.live + "\n" + this.number + "\n", this.pos.x, this.pos.y);

    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
  }
}
