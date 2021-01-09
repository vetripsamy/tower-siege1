const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,390,1200,20);

    box1=new Box(700,360);
    box2=new Box(730,360);
    box3=new Box(760,360);
    box4=new Box(790,360);
    box5=new Box(820,360);
    box6=new Box(850,360);
    box7=new Box(880,360);

    box8=new Box(730,320);
    box9=new Box(760,320);
    box10=new Box(790,320);
    box11=new Box(820,320);
    box12=new Box(850,320);

    box13=new Box(760,280);
    box14=new Box(790,280);
    box15=new Box(820,280);

    box16=new Box(790,240);

    poly = new Polygon(200,100);

    sling = new SlingShot(poly.body,{x:200,y:100});

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();

    poly.display();

    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
