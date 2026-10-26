const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var smallEngine, smallWorld
var footCircle
var floor, trampSpring1, trampSpring2
var springStand1

function setup()
{
    createCanvas (500, 900)
    smallEngine = Engine.create()
    smallWorld = smallEngine.world

    footCircle = new FootCircle (230, 100, 50)
    floor = new Floor (250, 700, 500, 10)
    trampSpring1 = new TrampStand (150, 670, 10, 50) 
    trampSpring2 = new TrampStand (300, 670, 10, 50)

    springStand1 = Constraint.create({
        bodyA: trampSpring1.body,
        pointA: {x:0, y:0},
        bodyB: trampSpring2.body,
        pointB: {x:0, y:0},
        length: 150,
        stiffness: 0.5
    })
    World.add(smallWorld, springStand1)
}


function draw()
{
    Engine.update(smallEngine)
    background("red")

    footCircle.display()
    floor.display()
    trampSpring1.display()
    trampSpring2.display()

    push()
    fill("pink")
    strokeWeight(10)
    line(trampSpring1.body.position.x, trampSpring1.body.position.y - 20, trampSpring2.body.position.x, trampSpring2.body.position.y - 20)
    pop()
}