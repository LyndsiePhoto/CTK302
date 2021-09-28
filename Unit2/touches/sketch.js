let numberOfTouches ;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("it is a beautiful day in the neighborhood for two", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("three friends are touching the screen", 5, 22) ;
            // put a picture here
      break ;


  }

}
