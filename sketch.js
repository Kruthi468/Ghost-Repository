var towerImg, tower;
var doorImg, door,doorG;
var climberImg, climber, climberG;
var ghostImg, ghost;
var Spooky;
    
function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");  
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png", "ghost-jumping.png");
  
  doorG=createGroup();
  climberG=createGroup();
  
  Spooky=loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300,10,10);
  tower.addImage(towerImg);
  tower.velocityY=1;
  ghost=createSprite(200,200,10,100);
  ghost.scale=0.5;
  ghost.addImage(ghostImg);
  

}
function draw(){
 background(0);
Spooky.play();
if(tower.y>400){
  tower.y=300;
}
if(keyWentDown("LEFT_ARROW")){
  ghost.x=ghost.x-3;
}
  if(keyWentDown("RIGHT_ARROW")){
  ghost.x=ghost.x+3;
}
  if(keyWentDown("space")){
  ghost.velocityY=-5;
  
}
  ghost.velocityY=ghost.velocityY+0.8;
  if(climberG.isTouching(ghost)){
    ghost.velocityY=0;
  }
  spawnDoors();
  
  drawSprites();
  
}
function spawnDoors(){
  if (frameCount % 240 === 0) {
   door=createSprite(200,-15,10,10);
    door.addImage(doorImg);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=800;
    doorG.add(door);

    climber=createSprite(200,50,10,10);
    climber.addImage(climberImg);
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800;
    climberG.add(climber);
    
    ghost.depth=door.depth;
    ghost.depth+=1

  }}