
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(480,600,100,100)
	
paper1= new Paper(50,650,50)
ground = new Ground(400,700,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
 box1.display()
 
 paper1.display()

}

 
function keyPressed(){

    if(keyCode === UP_ARROW)
    {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100});
    
    
    
    }
    
    
     
}
    
    