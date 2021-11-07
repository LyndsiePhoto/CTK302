// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp = 0 ;
var humidity = 0 ;


function setup() {
  createCanvas(600, 400);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=7512ac70b0e0fdaf629a562a81d8f352'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humidity = weather.main.humidity;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('yellow');
      //image ();
      fill('black');
      textSize (25);
      text("What is the weather like in " + weather.name + "?", 20, 25);
      textSize (15);
      text("The windspeed is " + windspeed,20, 55);
      text ("The temperature is " + temp, 20, 80);
      text ("The humidity is " + humidity, 20, 105);


      // cloud
      fill('blue');
      noStroke();
      ellipse(x, 300, 300, 100);
      ellipse(x, 260, 210, 100);
      ellipse(x, 340, 140, 70);

      // move the cloud's x position
      x = x + windspeed/4;
      if (x > width) x = 0;

      break;

  }
}
