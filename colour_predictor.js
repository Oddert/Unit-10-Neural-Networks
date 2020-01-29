let r, g, b
let brain
let which = 'black'

function pickColour() {
  r = random(255)
  g = random(255)
  b = random(255)
  redraw()
}

const trainColour = (r, g, b) => (r + g + b > 500) ? [1, 0] : [0, 1]

function colourPredictor(r, g, b) {
  console.log(Math.floor(r + g + b))
  let inputs = [r / 255, g / 255, b / 255]
  let outputs = brain.feedforward(inputs)
  // console.log(outputs)

  if (outputs[0] > outputs[2]) return 'black'
  else return 'white'
}

function setup() {
  createCanvas(600, 360)
  noLoop()
  brain = new NeuralNetwork(3, 3, 2)
  for (let i = 0; i < 10000; i++) {
    let r = random(255)
    let g = random(255)
    let b = random(255)
    let targets = trainColour(r, g, b)
    let inputs = [r / 255, g / 255, b / 255]
    brain.train(inputs, targets)
  }
  pickColour()
}


function mousePressed() {
  // let targets = (mouseX > width / 2) ? [0,1] : [1,0]
  // let inputs = [r / 255, g / 255, b / 255]
  // brain.train(inputs, targets)
  pickColour()
}

for (let i = 0; i < 30; i++) {

}

function draw() {
  background(r, g, b)
  strokeWeight(4)
  stroke(0)
  line(width / 2, 0, width / 2, height)

  textSize(64)
  noStroke()
  fill(0)
  textAlign(CENTER, CENTER)
  text('black', 150, 100)
  fill(255)
  text('white', 450, 100)

  which = colourPredictor(r, g, b)
  if (which === 'black') {
    fill(0)
    ellipse(200, 200, 60)
  } else {
    fill(255)
    ellipse(400, 200, 60)
  }

}
