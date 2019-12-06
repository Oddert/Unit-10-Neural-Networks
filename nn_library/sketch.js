
var brain

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

  const nn = new NeuralNetwork(2, 2, 1)
  const inputs = [1, 0]
  const targets = [1]
  nn.train(inputs, targets)

}

function draw () {

}
