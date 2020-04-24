const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2,ground3;
var box,box2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(100,100);

    ground = new Ground(600,570,1200,60,210,105,30);
    stage = new Ground(150,465,300,150,210,105,30)

    ground2 = new Ground(550,450,400,20,0,100,0);
    ground3 = new Ground(900,300,400,20,0,100,0);

    box = new Box(625,410,50,60);
    box2 = new Box(425,410,50,60,70,130,180);
    box3 = new Box(475,410,50,60,220,20,60);
    box4 = new Box(525,410,50,60,139,69,19);
    box5 = new Box(575,410,50,60,70,130,180);
    box6 = new Box(675,410,50,60,220,20,60);

    box7 = new Box(475,350,50,60,255,255,0);
    box8 = new Box(525,350,50,60,70,130,180);
    box9 = new Box(575,350,50,60,220,20,60);
    box10 = new Box(625,350,50,60,139,69,19);

    box11 = new Box(525,290,50,60,139,69,19);
    box12 = new Box(575,290,50,60,255,255,0);
    box13 = new Box(550,230,50,60,220,20,60);

    box14 = new Box(775,260,50,60,255,255,0);
    box15 = new Box(825,260,50,60,70,130,180);
    box16 = new Box(875,260,50,60,220,20,60);
    box17 = new Box(925,260,50,60,139,69,19);
    box18 = new Box(975,260,50,60,70,130,180);
    box19 = new Box(1025,260,50,60,220,20,60);

    box20 = new Box(825,200,50,60,255,255,0);
    box21 = new Box(875,200,50,60,70,130,180);
    box22 = new Box(925,200,50,60,220,20,60);
    box23 = new Box(975,200,50,60,139,69,19);

    box24 = new Box(875,140,50,60,139,69,19);
    box25 = new Box(925,140,50,60,255,255,0);
    box26 = new Box(900,80,50,60,220,20,60);

    slingShot = new SlingShot(ball.body,{x:200,y:300});
}

function draw(){
    background(50,0,200);
    Engine.update(engine);
    
    ground.display();
    stage.display();
    ground2.display();
    fill(550,450,400,20);
    ground3.display();

    box.display();
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
    box17.display();
    box18.display();
    box19.display();

    box20.display();
    box21.display();
    box22.display();
    box23.display();

    box24.display();
    box25.display();
    box26.display();

    ball.display();
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
