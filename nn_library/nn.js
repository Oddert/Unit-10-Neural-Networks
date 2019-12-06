
function sigmoid (x) {
  return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork {
  constructor (input_nodes, hidden_nodes, output_nodes) {
    this.input_nodes = input_nodes
    this.hidden_nodes = hidden_nodes
    this.output_nodes = output_nodes

    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes)
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes)
    this.weights_ih.randomise()
    this.weights_ho.randomise()

    this.bias_h = new Matrix(this.hidden_nodes, 1)
    this.bias_o = new Matrix(this.output_nodes, 1)
    this.bias_h.randomise()
    this.bias_o.randomise()
  }

  feedforward (input_array) {

    // Generating the Hidden Output
    const inputs = Matrix.fromArray(input_array)
    const hidden = Matrix.multiply(this.weights_ih, inputs)
    hidden.add(this.bias_h)
    // activation function
    hidden.map(sigmoid)

    // Generating the output's
    let output = Matrix.multiply(this.weights_ho, hidden)
    output.add(this.bias_o)
    output.map(sigmoid)

    // sending back to caller
    return output.toArray()
  }

  train (inputs, targets) {
    // here we, here we, here we fukin go
    let outputs = this.feedforward(inputs)

    // Convert array to Matrix object
    outputs = Matrix.fromArray(outputs)
    targets = Matrix.fromArray(targets)

    // Calculate the err = Targets - Outputs
    let output_errors = Matrix.subtract(targets, outputs)

    // Weigths Hidden to Output Transposed
    let who_t = Matrix.transpose(this.weights_ho)
    // calculate the hidden layer errors
    let hidden_errors = Matrix.multiply(who_t, output_errors)

    outputs.print()
    targets.print()
    output_errors.print()
  }

}
































//
