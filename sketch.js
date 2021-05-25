const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var bg;
var snow = [];

function preload(){
  bg=loadImage("snow3.jpg");
  
}





function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);
  Engine.update(engine); 
  if(frameCount%30 === 0){
    snow.push(new Snow(random(width/2-30, width/2+30), 10,10));
  }
 
  for (var j = 0; j < snow.length; j++) {
    snow[j].display();
  } 
  drawSprites();
}