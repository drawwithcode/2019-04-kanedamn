var myImage;

var mySong;
var analyzer;

var allLines = [];
var startLines = 500;
var h = 5;

function preload() {
  myImage = loadImage("./assets/gengar.gif")
  mySong = loadSound("./assets/rusty.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  for (var x = startLines; x < windowWidth - startLines; x += 10) {
    var tempx = x;
    var tempy1 = height / 2;
    var tempy2 = height / 2 + h;

    var tempLine = new Line(tempx, tempy1, tempx, tempy2);

    allLines.push(tempLine);
  }
}

function draw() {

  background(0);

  imageMode(CENTER);
  image(myImage, width / 2, height / 2 + 200, myImage.width / 4, myImage.height / 4);

  if (mouseIsPressed) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    } else {
      mySong.stop();
    }
  }

  var volume = 0;
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, height / 2, -5);

  for (var i = 0; i < allLines.length; i++) {
    var tempLine = allLines[i];

    tempLine.y2 = volume;

    tempLine.display();
  }

  var myText = "Are you afraid of ghosts?";

  textFont('VT323');
  drawingContext.font = "34px VT323";
  drawingContext.textAlign = "left";
  fill(255);
  text(myText, startLines, height / 2 + 30);

}

function Line(_x1, _y1, _x2, _y2) {
  this.x1 = _x1;
  this.y1 = _y1;
  this.x2 = _x2;
  this.y2 = _y2;
  this.color = stroke(255, 30, 121);

  this.display = function() {
    // var volume = 0;
    // volume = analyzer.getLevel();
    // volume = map(volume, 0, 1, 0, height);
    // h = volume;
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
