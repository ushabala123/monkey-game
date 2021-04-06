
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime
var ground
var gameState
var score
function preload(){
 
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600) 
monkey=createSprite(50,150,20,20)
   survivaltime=0
  score=0
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  ground = createSprite(200,180,900,10);
   ground.velocityX=-4
 ground.x = ground.width /2;
  foodGroup=new Group();
 obstacleGroup=new Group();
}


function draw() {
 background("white")
 monkey.collide(ground)
   survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivaltime,100,50);
  score = Math.round(getFrameRate()/60);
  text("Score: "+score,500,50);

  if(keyDown("space")&& monkey.y >= 30){
   monkey.velocityY=-3
 } 
  monkey.velocityY=monkey.velocityY+0.09
 food();
  if(ground.x < 0){
      ground.x = ground.width/2;
 } 
  
  
if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
}
   obstacles();
  drawSprites();
if(obstacleGroup.isTouching(monkey)){
  survivaltime=0
  score=0
 }
} 
 
  

function food(){
  if(frameCount%80===0){
  banana = createSprite(400,120,10,10);
    banana.y = Math.round(random(100,150));
  banana.velocityX=-6
  banana.addImage(bananaImage);
  banana.scale=0.1
  banana.lifeTime=50
    foodGroup.add(banana);
}
}
function obstacles(){
  if(frameCount%60===0){
  obstacle = createSprite(200,170,30,30);
    obstacle.x = Math.round(random(200,220));
  obstacle.velocityX=-10
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.11
  obstacle.lifeTime=100
    obstacleGroup.add(obstacle)
  }
}




