const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1, b2, b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20, ground;
var ball, chain,sound;
function preload(){
sound=loadSound("Sleep Away.mp3");
}
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  sound.play();
  ground = new Ground(600, 600, 1200, 20);

  b1 = new Box(900, 100, 70, 70);
  
  b2 = new Box(900, 100, 70, 70);
 
  b3 = new Box(900, 100, 70, 70);
  
  b4 = new Box(900, 100, 70, 70);
  
  b5 = new Box(900, 100, 70, 70);
  
  b6 = new Box(900, 100, 70, 70);
  
  b7 = new Box(800, 100, 70, 70);
 
  b8 = new Box(800, 100, 70, 70);
  
  b9 = new Box(800, 100, 70, 70);
  
  b10 = new Box(800, 100, 70, 70);
 
  b11 = new Box(800, 100, 70, 70);
  
  b12 = new Box(800, 100, 70, 70);

  b13 = new Box(700, 100, 70, 70);
 
  b14 = new Box(700, 100, 70, 70);
 
  b15 = new Box(700, 100, 70, 70);
  
  b16 = new Box(700, 100, 70, 70);
 
  b17 = new Box(700, 100, 70, 70);

  
  b18 = new Box(700, 100, 70, 70);
  
  b19 = new Box(700, 100, 70, 70);
  
  b20 = new Box(700, 100, 70, 70);
  
  ball = new Ball(200, 200, 80, 80);
  chain = new Chain(ball.body, { x: 500, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  
  b18.display()
  b19.display()
  b20.display()
  

  ball.display();
  chain.display();

//sound.play();

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


