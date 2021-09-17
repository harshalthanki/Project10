
var bg, ship;
var bgImg, shipImg;
var invisible1;

function preload()
{
  bgImg = loadImage("sea.png")
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(1400,675);
  bg = createSprite(845,338,100,100);
  bg.addImage(bgImg)
  bg.scale = 0.405;

  ship = createSprite(200,450,20,20);
  ship.scale = 0.5;
  ship.addAnimation("shipMoving",shipImg)
  
  invisible1 = createSprite(700,675,1400,20)
  invisible1.visible = false;
}

function draw() {
  background("blue");
  drawSprites();
  
console.log(ship.y)
bg.velocityX = -4;
ship.collide(invisible1);

if(bg.x < 560)
{
  bg.x = 845;
}

if(keyDown("up") && ship.y > 297.5)
{
  ship.y += -2;
}

if(keyDown("down"))
{
  ship.y += 2;
}

}