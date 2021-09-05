
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperBall


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,680,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  paperBall = new Paper(300,60,50)
}


function draw() {
  rectMode(CENTER);
  background(230);
 
paperBall.display()
  groundObject.display();
  dustbinObj.display();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
// if arrow pressed up then the paper will fly
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:630,y:-545});
	}
}
