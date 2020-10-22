
var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananag;
var monkey;
var obstacleg;
var score=0;
var ground;
var survivalTime=0;
var food;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
   monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x);
  
  bananag = new Group();
  obstacleg = new Group();

}


function draw() {
  background(255);
  if(gameState===PLAY){
  if(ground.x<0) {
    ground.x=ground.width/2;
    
  }
  monkey.collide(ground);
    
  if(keyDown("space")) {
    monkey.velocityY= -12;
    
  }
   monkey.velocityY=monkey.velocityY+0.8;
    
    banana();

    if(bananag.isTouching(monkey))
    {
      bananag.destroyEach();
      score=score+1;
    }
       if(score === 5)
      {
        gameState = END;
      }
    if(obstacleg.isTouching(monkey))
    {
      gameState = END;
    }
    if(gameState === END)
    {
      ground.velocityX = 0;
    }
  }

  
  drawSprites();
    stroke("white");
  textSize(20);
  fill("black");
  text("Score"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time"+survivalTime, 100,50);
}



function banana(){
  if(frameCount%80===0){
    position = Math.round(random(1,2));
    var food=createSprite(400,200,20,20);
    food.addImage(bananaImage);
    food.scale=0.2;
    console.log(position)

    if(position===1)
    {
    
    food.x=400;
    food.velocityX=-(7+(score/4));
    }
    else
      {
        if(position==2){
      food.x=0;
      food.velocityX=(7+(score/4));
        }
      }
 
     r=Math.round(random(1,4));
    if (r == 1) {
      food.addImage(banana);
    
    }
    
    food.y=Math.round(random(50,250));
   food.setLifetime=100;
    bananag.add(food);
  }

}



