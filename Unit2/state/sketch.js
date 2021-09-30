let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("red");
      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 20) {
          rect(i, j, 5, 15);
        }
      }
       break;

    case 1:
      background("yellow");
      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 20) {
          rect(i, j, 5, 5);
        }
      }
      break;

    case 2:
      background("blue");
      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 20) {
          rect(i, j, 10, 15);
        }
      }
      break;

    case 3:
      background("orange");
      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 10) {
          rect(i, j, 10, 15);
        }
      }
      break;

    case 4:
      background("purple");
      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 10) {
          rect(i, j, 5, 10);
        }
      }
      break;
  }
}

function mouseReleased() {
  state = state + 1;
  {
    if (state > 4) state = 0;
  }
}
