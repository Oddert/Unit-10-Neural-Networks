
var brain
var lr_slider
const training_data = [
  {
    inputs: [0,1],
    targets: [1]
  },
  {
    inputs: [1,0],
    targets: [1]
  },
  {
    inputs: [0,0],
    targets: [0]
  },
  {
    inputs: [1,1],
    targets: [0]
  },
]

var nn

function setup () {
  // let a = new Matrix(2,2)
  // a.randomise()
  // a.print()
  // function doubleit (x) {
  //   return x * 2
  // }
  // a.map(doubleit)
  // a.print()


  // let nn = new NeuralNetwork(2,2,1)
  // let input = [1,0]
  // let output = nn.feedforward(input)
  // console.log(output)

  nn = new NeuralNetwork(2, 2, 1)

  for (let i=0; i<50000; i++) {
    let data = random(training_data)
    nn.train(data.inputs, data.targets)
  }

  nn.train([0,1], [0])
  lr_slider = createSlider(0.01, .5, .1, .01)
  // console.log(nn.feedforward([0,1]))

  console.log(nn.feedforward([0,0]))
  console.log(nn.feedforward([0,1]))
  console.log(nn.feedforward([1,0]))
  console.log(nn.feedforward([1,1]))
}


function setupX () {
  createCanvas(400, 400)
  nn = new NeuralNetwork(2, 4, 1)
  lr_slider = createSlider(0.01, .5, .1, .01)
}

// function setup () {
//   setupX()
// }

function draw () {
  background(0)
  for (let i=0; i<1000; i++) {
    let data = random(training_data)
    nn.train(data.inputs, data.targets)
  }

  nn.setLearningRate(lr_slider.value())

  let resolution = 10
  let cols = width / resolution
  let rows = height / resolution
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      let x1 = i / cols
      let x2 = j / rows
      let inputs = [x1, x2]
      let y = nn.feedforward(inputs)
      noStroke()
      fill(y * 255)
      rect(i * resolution, j * resolution, resolution, resolution)
    }
  }
}










//
