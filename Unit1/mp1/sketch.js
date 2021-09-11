var font2;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  ellipseMode(CENTER);
  font2 = loadFont("assets/Satisfy.ttf");

}

function draw() {
  background(600);
  textFont(font2, 48);
  text("This is Ruby the Polaroid camera. Her superpower is her ability to capture the beauty of the sun in a single \n frame. She enjoys traveling the world with her human and capturing beautiful sunrise and sunset scenes to \n share with others throughout the world.", 5, 515);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed

    fill('blue');
    rect(600, 220, -3000, 600);

    fill('yellow');
    rect(600, 350, -3000, 330);

    fill('green');
    rect(600, 480, -2000, 300);


    fill('white');
    rect(width / 2 - 10, height / 2 - 150, 300, 270);
    //polaroid image on top of camera_outter square

    fill('blue');
    rect(width / 2 - 10, height / 2 - 140, 250, 250);
    //polaroid image on top of camera_inner square

    fill('orange');
    triangle(178, 68, 331, 380, 305, 260);

    triangle(205, 63, 331, 380, 310, 260);

    triangle(228, 58, 331, 380, 315, 260);

    triangle(245, 58, 331, 380, 320, 260);

    triangle(268, 58, 331, 380, 335, 260);

    triangle(288, 58, 331, 380, 335, 260);

    triangle(310, 58, 331, 380, 335, 260);

    triangle(325, 58, 331, 380, 355, 260);

    triangle(345, 58, 331, 380, 355, 260);

    triangle(365, 63, 331, 380, 355, 260);

    triangle(380, 58, 331, 380, 365, 260);

    //sun rays in polaroid picture

    fill('yellow');
    circle(290, 200, 210);

    fill('red');
    rect(width / 2, height / 2, 300, 300);
    //outline square of camera


    fill('black');
    rect(width / 2, height / 2 + 10, 300, 10);
    //lines behind lens

    rect(width / 2, height / 2 + 60, 300, 10);
    //lines behind lens


    fill('black');
    ellipse(width / 2 + 25, height / 2 + 35, 190, 190);
    //outter circle of lens

    fill('white');
    ellipse(width / 2 + 25, height / 2 + 35, 170, 170);
    //second from outter inner circle of lens

    fill('white');
    ellipse(width / 2 + 25, height / 2 + 35, 120, 120);
    //second from center circle of lens

    fill('black');
    ellipse(width / 2 + 25, height / 2 + 35, 75, 75);
    //small inner circle of lens


    fill('black');
    ellipse(width / 2 + 125, height / 2 - 105, 10, 10);
    //small stacked circles at top of camera

    ellipse(width / 2 + 125, height / 2 - 90, 10, 10);
    //small stacked circles at top of camera


    fill('black');
    rect(width / 2 - 134, height / 2, 75, 300);
    //left side gripper handle

    fill('white')
    rect(width / 2 - 60, height / 2 - 100, 35, 80);
    //flash

    rect(width / 2 - 60, height / 2 - 100, 35, 50);
    //flash details

    rect(width / 2 - 60, height / 2 - 100, 35, 20);
    //flash details


    fill('white');
    rect(width / 2 - 135, height / 2 - 100, 45, 45);
    //viewfinder


    fill('white');
    ellipse(width / 2 - 135, height / 2 - 40, 40, 40);
    //second from center side button

    fill('black');
    ellipse(width / 2 - 135, height / 2 - 40, 20, 20);
    //center of side button

  } else {
    // when the mouse isn't pressed!
    fill('blue');
    rect(600, 220, -3000, 600);

    fill('yellow');
    rect(600, 350, -3000, 330);

    fill('green');
    rect(600, 480, -2000, 300);

    fill('white');
    rect(width / 2 - 10, height / 2 - 150, 300, 30);
    //polaroid slot on top of camera

    fill('gray');
    rect(width / 2, height / 2, 300, 300);
    //outline square of camera

    fill('black');
    rect(width / 2, height / 2 + 10, 300, 10);
    //lines behind lens

    rect(width / 2, height / 2 + 60, 300, 10);
    //lines behind lens


    fill('black');
    ellipse(width / 2 + 25, height / 2 + 35, 190, 190);
    //outter circle of lens

    fill('white');
    ellipse(width / 2 + 25, height / 2 + 35, 170, 170);
    //second from outter inner circle of lens

    fill('white');
    ellipse(width / 2 + 25, height / 2 + 35, 120, 120);
    //second from center circle of lens

    fill('black');
    ellipse(width / 2 + 25, height / 2 + 35, 75, 75);
    //small inner circle of lens



    ellipse(width / 2 + 125, height / 2 - 105, 10, 10);
    //small stacked circles at top of camera

    ellipse(width / 2 + 125, height / 2 - 90, 10, 10);
    //small stacked circles at top of camera



    rect(width / 2 - 134, height / 2, 75, 300);
    //left side gripper handle

    fill('white');
    rect(width / 2 - 60, height / 2 - 100, 35, 80);
    //flash

    rect(width / 2 - 60, height / 2 - 100, 35, 50);
    //flash details

    rect(width / 2 - 60, height / 2 - 100, 35, 20);
    //flash details


    rect(width / 2 - 135, height / 2 - 100, 45, 45);
    //viewfinder



    ellipse(width / 2 - 135, height / 2 - 40, 40, 40);
    //second from center side button

    fill('black');
    ellipse(width / 2 - 135, height / 2 - 40, 20, 20);
    //center of side button


  }

}
