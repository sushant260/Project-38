


var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database,p1,p2,p3,p4;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  p1=loadImage("../images/plane1.jpg");
  p2=loadImage("../images/plane2.jpg");
  p3=loadImage("../images/plane3.png");
  p4=loadImage("../images/plane4.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
