
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1;
var rect2;
var rect3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,668,1200,20);

	rect1 = new Dustbin(750,493,330,15);
	rect2 = new Dustbin(530,493,330,15);
	rect3 = new Dustbin(640,650,15,250);
	ball = new Ball(100,350,35);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ball.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:-250});

	}
}



