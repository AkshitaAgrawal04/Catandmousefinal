var cat, catimg1, catimg2, catimg3;
var mouse, mouseimg1, mouseimg2, mouseimg3;
var garden, gardenimg;
function preload() {
  //load the images here
  gardenimg = loadImage("images/garden.png");

  catimg1 = loadImage("images/cat1.png");
  catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
  catimg3 = loadImage("images/cat4.png");

  mouseimg1 = loadImage("images/mouse1.png");
  mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseimg3 = loadImage("images/mouse4.png");
}

function setup() {
  createCanvas(1000, 800);
  //create tom and jerry sprites here
  garden = createSprite(500, 400);
  garden.addImage("garden", gardenimg);

  cat = createSprite(900, 400);
  cat.addAnimation("cat", catimg1);
  cat.scale= 0.2;


  mouse = createSprite(200, 400);
  mouse.addImage("mouse", mouseimg1);
  mouse.scale=0.2;
  mouse.setCollider("circle", 0, 0, 300);


  //mouse.debug= true;
  //cat.debug= true;
}

function draw() {

  background(255);
  //Write condition here to evalute if tom and jerry collide
  if (cat.x - mouse.x < cat.width / 2 + mouse.width / 2) {
    cat.addAnimation("cat", catimg3);
    mouse.addImage("mouse", mouseimg3);
    cat.velocityX= 0;
  }
  drawSprites();
  
}


function keyPressed()
{
  if (keyCode===LEFT_ARROW) {
    mouse.addAnimation("mouse", mouseimg2);
    cat.addAnimation("cat", catimg2);
    cat.velocityX = - 2;
  }
  //For moving and changing animation write code here



  }
