var font1;

function setup() {
  createCanvas(700, 700);
  font1 = loadFont ("assets/LuckiestGuy.ttf");
}

function draw() {
  background ("yellow");
  textFont (font1, 48);
  textSize (90);
  text ("hello world", 75, 75);

}
