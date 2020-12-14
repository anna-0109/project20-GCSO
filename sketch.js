var car,wall;
var weight,speed;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  weight = Math.round(random(400,1500));
  speed = Math.round(random(55,90));
  
  car = createSprite(50,200,50,50);
  car.velocityX= speed;
  wall =createSprite(1200,200,60,height/2);
wall.shapeColor="black"
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
if(car.x-wall.x<(car.width/2+wall.width/2))
{
  deformation= (0.5*weight*speed*speed)/22500;
  if(deformation<100)
  {
    car.shapeColor="green";
  }
  else if(deformation>=100&&deformation<=180)
  {
    car.shapeColor="yellow";
  }

  else if(deformation>180)
  {
    car.shapeColor="red";
  }
}
}