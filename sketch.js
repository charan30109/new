var bullet;
var wall;
var speed1=Math.random(223,323);
var weight=Math.random(32,42);
var thickness=Math.random(140,240)
function setup() {
  createCanvas(600,400);
  bullet=createSprite(50, 350, 60, 10);
  bullet.shapeColor="purple";
  bullet.velocityX = speed1;
 
wall=createSprite(590,350,thickness,200)
  
  
  
}

function draw() {
  background("black");  
  drawSprites();
 
  if(v(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed1 * speed1/(thickness * thickness *thickness)
    
    if(damage>10) {
    
      wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10) {
    
      wall.shapeColor=color(0,255,0);
      
      
      }
    
    }
  
  }
function v(lbullet,lwall) {
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge) {

 return true;

}
return false
}








