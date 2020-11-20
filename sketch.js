
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/7,width/7,20);

	

	//Create the Bodies Here.
	bob1 =new Bob(800-80,615,40);
	bob2 =new Bob(800-40,615,40);
	bob3 =new Bob(800,615,40);
	bob4 =new Bob(800+40,615,40);
	bob5 =new Bob(800+80,615,40);

	
	

	rope1 = new Rope(bob1.body,roof.body,-40*2,0)
	
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  
  roof.display();
  rope1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
}



