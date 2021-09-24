let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
    background('yellow');
    textSize (25);
    text("Why did the golfer bring \n two pairs of pants?", 100, height/2) ;
    break;

    case 1:
    background('blue');
    textSize (25);
    text("In case he got a hole in one.", 100, height/2) ;
    break;
        }

        timer ++ ;
        if (timer > 3*60) {
          timer = 0;
          state ++;
          if (state > 1) state = 0;
        }

      }

      function mouseReleased() {
        state++;
        if (state > 1) state = 0;
      }
