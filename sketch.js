
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b,tree,stone,mango;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  
	b = new boy(50,500,200,200)
	tree = new mangotree(400,250,50,100)
	s = new st(70,500,50)
	m1 = new ma(500,260,30)
  m2 = new ma(530,340,50)
  m3 = new ma(590,400,25)
  m4 = new ma(450,390,10)
  m5 = new ma(670,400,50)
  m6 = new ma(490,490,40)
  m7 = new ma(650,290,45)
  m8 = new ma(640,500,20)
  m9 = new ma(500,390,15)
  m10 = new ma(450,390,35)
  m11 = new ma(450,450,9)

  lObj = new launcher(s.body,{x:70,y:500})

  g = new Ground(width/2,700,width,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  g.display();
  b.display();
  tree.display();
  s.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  lObj.display();

  detectollision(s,m1);
  detectollision(s,m2);
  detectollision(s,m3);
  detectollision(s,m4);
  detectollision(s,m5);
  detectollision(s,m6);
  detectollision(s,m7);
  detectollision(s,m8);
  detectollision(s,m9);
  detectollision(s,m10);
  detectollision(s,m11);

  drawSprites();
 
}

function mouseDragged () {
  Matter.Body.setPosition(s.body,{x:mouseX , y:mouseY})
}

function mouseReleased () {
  lObj.fly;
}

function detectollision(ls,lm) {
  maBodyPosition = lm.body.position
  stBodyPosition = ls.body.position

  var distance = dist(stBodyPosition.x,stBodyPosition.y,maBodyPosition.x,maBodyPosition.y)

  if(distance <= lm.r + ls.r) {
    Matter.Body.setPosition(lm.body,false);
  }

}

function keyPressed() {
  if(keyCode === 32){
      //bird.trajectory = []
      Matter.Body.setPosition(s.body, {x: 70, y: 500});
      lObj.attach(s.body);
  }
}

