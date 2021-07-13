var backgroundImg;
var background;
var carrot,carrotImg;
var goldenCarrot,goldenCarrotImg;
var rabbit,rabbit_running;
var score = 0;

function preload(){
  rabbit_running =   loadAnimation("images/rabbit1.png","images/rabbit2.png");
  backgroundImg = loadImage('images/bg4.jpg');
  carrotImg = loadImage('images/carrot.png');
  goldenCarrotImg = loadImage('images/goldencarrot.png');
  
}

function setup() {
  createCanvas(400, 400);
  
  background = createSprite(0,0,400,400);
  background.addImage(backgroundImg);
  background.scale = 1;
  background.x = width/2;

  rabbit = createSprite(50,250,20,20);
  rabbit.addAnimation("rabbit",rabbit_running);
  rabbit.scale = 0.05;
  
}
function draw() {
    background.velocityX = -2;  
    
    textSize(25);
    text("Score: " + score, 300, 30);

    if (background.x < 0){
      background.x = background.width/2;
    }

    spawnCarrot();
    spawngoldenCarrot();
   
    drawSprites();
  
}

function spawnCarrot(){
  if( frameCount% 90 === 0){
    carrot = createSprite(800,120,30,10);
    carrot.y = Math.round(random(250,270));
    carrot.addImage(carrotImg);
    carrot.scale = 0.05;
    carrot.velocityX = -3;
  }
}

function spawngoldenCarrot(){
  if( frameCount% 200 === 0){
    goldenCarrot = createSprite(800,120,30,10);
    goldenCarrot.y = Math.round(random(250,270));
    goldenCarrot.addImage(goldenCarrotImg);
    goldenCarrot.scale = 0.15;
    goldenCarrot.velocityX = -3;
  }
}

