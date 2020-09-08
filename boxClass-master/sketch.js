const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ground1
var engine, world;
var box1, box2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(200,380,400,40)
    box1 = new Box(200,300,50,50);
    box2=new Box(180,200,50,50)
    box3=new Box(220,100,40,20)
    box4=new Box(260,100,20,40)
    box5=new Box(320,50,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box3.display()
    box2.display()
    box4.display()
    box5.display()
    ground1.display()
}