var mySong;
var analyzer;

function preload(){
  mySong = loadSound("./assets/8BIT.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  var volume = 0;
  if (mouseIsPressed){
    if(mySong.isPlaying() == false){
      mySong.play();
    }

  var startLines = 500; //dove iniziano le linee
  var y = height/2;
  var hLines = 5; //altezza linee

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  for(var x = startLines; x < windowWidth - startLines; x+= 10){
    stroke(255);
    line(x, y - hLines, x, y + volume);
    }
  }
}
