const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var night,nightIMG;
var fairy1,fairy;
var starIMG ,star;
var music
var invisible

function preload(){
   //preload the images here
   nightIMG = loadImage("images/starnight.png");
   starIMG = loadImage("images/star.png");
   fairy1 = loadImage("images/fairy1.png","images/fairy2.png");
   music = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
    world = engine.world;

   

  //create background here
  night = createSprite(400,350,750,800);
  night.addImage(nightIMG);
  
  //create star here
  star = createSprite(740,100,10,10);
  star.addImage(starIMG);  
  star.scale =0.3;

// create fairy here
   fairy = createSprite(200,600,10,10);
   fairy.addImage(fairy1);
   fairy.scale = 0.3;


}


function draw() {
  background("black");
  edges=createEdgeSprites();
    fairy.collide(edges);
    // star.collide(fairy);
  Engine.update(engine);
  //music.play();
 if(star.position.y > 470){
   star.velocityY = 0;
 }



  drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    fairy.velocityX = 4;
   
  }
  if(keyCode == DOWN_ARROW){
    star.velocityY = 4;
  }
}