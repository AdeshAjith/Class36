var myGamestate = 0;
var myPlayerCount = 0;
var database

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game = new Game()
  game.getstate()
  game.Start()
}

function draw(){
  background("white");
  
}

