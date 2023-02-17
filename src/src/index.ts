import "./assets/css/bootstrap.min.css"
import "./assets/css/index.css"
import "./assets/media/worldview.jpg"
import "./assets/media/tictactoe.jpg"
import "./assets/media/logo.png"
import "./assets/media/logo2.png"
// import * as Matter from 'matter-js'
// var Engine = Matter.Engine
// var Render = Matter.Render
// var World = Matter.World
// var Bodies = Matter.Bodies
// var Body = Matter.Body
// var Composite = Matter.Composite
// var Events = Matter.Events
// var Mouse = Matter.Mouse
// var MouseConstraint = Matter.MouseConstraint
// var Common = Matter.Common

// import {createBall, createElementBody, shakeScene} from "./utils"


// window.addEventListener("load", ()=>{


//     var canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement

//     var engine = Engine.create()
//     var render = Render.create({
//         canvas: canvas,
//         engine: engine,
//         options: {
//           width: window.innerWidth,
//           height: window.innerHeight,
//           wireframes: false,
//           wireframeBackground: "transparent",
//           background: "transparent"
          
//         }
//       })
//     var ball = createBall({ x: 15, y: -21 })
//     var ball2 = createBall({ x: -15, y: -21 })
//     var ball3 = createBall({ x: 0, y: 0 })

//     var logo = document.getElementById("logo")
//     var logoElementBody = createElementBody(logo, "circle")

//     var card1 = document.getElementById("card1")
//     var card1ElementBody = createElementBody(card1, "rectangle")

//     var card2 = document.getElementById("card2")
//     var card2ElementBody = createElementBody(card2, "rectangle")

//     var ceiling = Bodies.rectangle(
//         window.innerWidth / 2,
//         -12,
//         window.innerWidth,
//         30,
//         {
//           isStatic: true,
//           render: {
//             visible: false
//           }
//         }
//       )

//     var floor = Bodies.rectangle(
//         window.innerWidth / 2,
//         window.innerHeight,
//         window.innerWidth,
//         30,
//         {
//             isStatic: true,
//             render: {
//             fillStyle: "#343a40"
//             }
//         }
//     )
//     var domBodies = [ball, ball2, ball3, logoElementBody, card1ElementBody, card2ElementBody, ceiling, floor]


//     document.body.addEventListener("keypress", (e) =>{
//       if(e.keyCode){

//       }
//     })

//     // World.add(engine.world, mConstraint)
    
//     World.add(engine.world, domBodies)

//     Engine.run(engine)
//     Render.run(render)
// })




// var hints = document.getElementById("hints")
// setTimeout(() => {
//   hints.style.display = "none"
// }, 20000)