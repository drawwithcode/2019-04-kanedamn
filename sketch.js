var mySong;

var fft;
var w;

function preload() {
  mySong = loadSound("./assets/rusty.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  mySong.play();

  fft = new p5.FFT(0.9, 32);
  w = (width/2) / 100;
}

function draw() {

  background(0);

//--------------------GENGAR----------------------------------------
  //imageMode(CENTER);
  //image(myImage, width / 2, height / 2 + 200, myImage.width / 4, myImage.height / 4);

//---------------------VISUALIZER-----------------------------------
  var spectrum = fft.analyze();
  strokeWeight(2);
  stroke(255, 30, 121);
  for (var i =0; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, 500, 300, 0);
    line((width/2) + i * w, y, (width/2) + i * w, height/2);
  }

  strokeWeight(2);
  stroke(255, 30, 121);
  for (var i = 0; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, 550, 350, 0);
    line((width/2) - i * w, y, (width/2) - i * w, height/2);
  }

//-----------------------TEXT----------------------------------------
  var myText = "Are you afraid of ghosts?";

  textFont('VT323');
  drawingContext.font = "34px VT323";
  drawingContext.textAlign = "center";
  fill(255);
  text(myText, width/2, height / 2 + 40);

}
