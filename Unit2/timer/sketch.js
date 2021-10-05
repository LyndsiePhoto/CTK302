let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('yellow');
      textSize(25);
      text("Knock, knock.\n Who's there?", 100, height / 2);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background('blue');
      textSize(25);
      text("Robin.\n Robin who?", 100, height / 2);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }
        break;

        case 2:
        background('red');
        textSize(25);
        text("Robin you.\n Give me your money!", 100, height / 2);
        timer++;
        if (timer > 4 * 60) {
          timer = 0;
          state = 2;
        }
          break;
        }

      }

      function mouseReleased() {
        state++;
        if (state > 1) state = 0;
      }
