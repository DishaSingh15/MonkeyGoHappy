var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,600);
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation ("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite (400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log (ground.x);

  foodsGroup = new Group ();
  obstaclesGroup = new Group ();
  
}


function draw() {
  background ("white");
  
  if (ground.x > 500) {
    ground.x = 400;
  }
  
  if (keyDown ("space")) {
    monkey.velocityY = -10;
  }
   monkey.velocityY = monkey.velocityY+ 0.3;
  
  banana ();
  obstacle ();
  
  if (foodsGroup.isTouching (monkey)) {
    foodsGroup.destroyEach ();
    score = score + 1;
  }
  if (obstaclesGroup.isTouching(monkey)) {
    foodGroup.destroyEach ();
    obstaclesGroup.destroyEach ();
    foodsGroup.setVelocityXEach (0);
    obstaclesGroup.setVelocityXEach (0);
    monkey.velocityY = 0;
  }
  
  drawSprites ();
  
  stroke ("white");
  textSize (20);
  fill ("white");
  text ("Score: ",score,200,50);
  
  stroke ("black");
  textSize (20);
  fill ("black");
  survivalTime = Math.ceil (frameCount/frameRate ());
  text ("Survival Time: ",survivalTime,100,50);
}

function banana () {
  if (frameCount%80 === 0) {
    bananas = createSprite (300,300);
    bananas.addImage (bananaImage);
    bananas.scale = 0.1;
    bananas.y = Math.round (random(120,200));
    bananas.velocityX = -3;
    bananas.lifetime = 100;
    foodsGroup.add (bananas);
    
  }
}
function obstacle () {
 if (frameCount%300 === 0) { 
  obstacles = createSprite (500,500);
  obstacles.addImage (obstacleImage);
  obstacle.scale = -4;
  obstacles.y = Math.round (random(150,230));
  obstacles.velocityX = -3;
  obstacles.lifetime = 150;
   obstacles.addImage (obstacleImage);
   obstaclesGroup.add (obstacles);
 }
}





