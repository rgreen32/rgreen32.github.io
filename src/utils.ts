import * as Matter from 'matter-js'
var Engine = Matter.Engine
var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies
var Body = Matter.Body
var Composite = Matter.Composite
var Events = Matter.Events
var Mouse = Matter.Mouse
var MouseConstraint = Matter.MouseConstraint
var Common = Matter.Common

export var createBall = (velocity: Matter.Vector) => {
    return Bodies.circle(100, window.innerHeight - 120, 30, {
        render: {
          fillStyle: "#FFFFFF",
          sprite: { texture: "assets/media/logo.png", xScale: 0.15, yScale: 0.15 }
        },
        label: "ball",
        plugin: {
          wrap: {
            min: { x: 0, y: 0 },
            max: { x: window.innerWidth, y: window.innerHeight }
          }
        },
        restitution: 1,
        frictionAir: 0.002,
        velocity: velocity
      })
}

export var createElementBody = (element: HTMLElement, shape: string) =>{
    var elementRect = element.getBoundingClientRect()
    var elementBody: Matter.Body
    switch(shape){
        case "circle":
            elementBody = Bodies.circle(
                elementRect.x + elementRect.width / 2,
                (elementRect.bottom + elementRect.top) / 2,
                elementRect.width / 2,
                {
                  isStatic: true,
                  label: "logo",
                  render: {
                    visible: false
                  }
                }
              )
            break;
        case "rectangle":
            elementBody = Bodies.rectangle(
                elementRect.x + elementRect.width / 2,
                elementRect.y + elementRect.height / 2,
                elementRect.width,
                elementRect.height,
                {
                  isStatic: true,
                  label: "card1",
                  chamfer: { radius: 20 },
                  render: {
                    visible: false
                  }
                }
            )
    }

    return elementBody
}

export var shakeScene = (engine: Matter.Engine) => {
  var bodies = Composite.allBodies(engine.world)

  for (var i = 0; i < bodies.length; i++) {
    var body = bodies[i]

    if (!body.isStatic) {
      var forceMagnitude = 0.02 * body.mass
      Body.applyForce(body, body.position, {
        x:
          (forceMagnitude + Common.random() * forceMagnitude) *
          Common.choose([1, -1]),
        y: -forceMagnitude + Common.random() * -forceMagnitude
      })
    }
  }
}
