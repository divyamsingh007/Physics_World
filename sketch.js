const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var ball, ground;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  var option = {restitution:1}

  ball = Bodies.circle(200,200,2,option);
  World.add(world,ball);

  var option_1 = {isStatic:true}
  ground = Bodies.rectangle(0,560,600,20,option_1);
  World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine);


  ellipse(ball.position.x, ball.position.y, 20, 20);
  rect(ground.position.x, ground.position.y, 600, 20)
}