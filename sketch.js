const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;
var b1, b2;

function setup() {
    createCanvas(400, 400);

    engine = Engine.create(); // to create physics engine.
    world = engine.world;

    ground = new Ground(200, 380, 400, 20);
    b1 = new Ball(200, 300, 50, 50);
    b2 = new Ball(240, 100, 50, 100)


    //   Matter.Body.setVelocity(ball, { x: 2, y: 2 });
}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    b1.display();
    b2.display();
}