
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,ground2,ground3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	var  ball_options={

      
	  restitution:1,
	  friction:0,
	  density:1.2

	}


	

	//crear los cuerpos aquí.

	ball = Bodies.circle(100,200,20, ball_options)
	World.add(world,ball)
	

	ground =new Ground(400,600,790,10);
	ground2 =new Ground(500,580,10,60);
    ground3 = new Ground(600,580,10,60);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  ellipse(ball.position.x,ball.position.y,20)

  ground.show()
  ground2.show()
  ground3.show()

  keyPressed()
 
  drawSprites();
 
}



function keyPressed(){

    if (keyCode === UP_ARROW){
         
		xforce()
		yforce()

    }

}

function xforce() {

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0})
  
  }
  
  function yforce() {
  
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
  
  }