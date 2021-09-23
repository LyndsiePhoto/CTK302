let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
    background('yellow');
    textSize (25);
    text("What did one traffic light \n say to the other?", 100, height/2) ;
    break;

    case 1:
    background('blue');
    textSize (25);
    text("Stop Looking! \n I'm changing!", 100, height/2) ;
    break;
        }

      }

      function mouseReleased() {
        state++;
        if (state > 1) state = 0;
      }
