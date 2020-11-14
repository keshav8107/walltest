var bullet,wall,thickness;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52)
	thickness=random(22,83)

	wall=createSprite(1200, 200,thickness,height/2);   
	bullet=createSprite(400,200,50,5)
	bullet.velocityX = speed;

	


  
  
}


function draw() {
  background(0);

 if(hasCollided(wall,bullet)){
  	bullet.velocityX=0;
  	var Damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(Damage>10)
	{
		wall.shapeColor=color("red");
	}

	if(Damage<10)
	{
		wall.shapeColor=color("green");
	}

}
  
  
  drawSprites();
 
}
function hasCollided(object1,object2){
	if(object1.x-object2.x < (object1.width+object2.width)/2)
	{
		return(true)
	}	
	else{
		return(false)
	}
}
