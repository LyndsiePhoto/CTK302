var font1, font2;

function setup() {
  createCanvas(700, 700);
  font1 = loadFont ("assets/LuckiestGuy.ttf");
  font2 = loadFont ("assets/Satisfy.ttf");
}

function draw() {
  background ("yellow");
  textFont (font1, 48);
  text ("hello world", 75, 75);

  textFont (font2, 48);
  text ("Photo Chick", 75, 175);


}
