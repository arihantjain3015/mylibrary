
var mrect,frect
function setup() {
  createCanvas(1200,800);
  frect=createSprite(400, 200, 50, 80);
  mrect=createSprite(200,100,80,30);
  gobj1 = createSprite(300,100,50,50);
  gobj2 = createSprite(100,50,80,30);
  gobj1.shapeColor="blue";
  gobj2.shapeColor="blue";
  frect.shapeColor="green";
  mrect.shapeColor="green";
  frect.debug=true;
  mrect.debug=true;
}

function draw() {
  background(0);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

if (istouching(gobj2,mrect)){
  gobj2.shapeColor="red";
  mrect.shapeColor="red";
} else{
  gobj2.shapeColor="blue";
  mrect.shapeColor="green";
}
  drawSprites();
}
