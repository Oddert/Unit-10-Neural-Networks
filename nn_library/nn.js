
function sigmoid (x) {
  return 1 / (1 + Math.exp(-x));
}

function dsigmoid (y) {
  // return sigmoid(x) * (1 - sigmoid(x))
  return y * (1 - y)
}

class NeuralNetwork {
  constructor (input_nodes, hidden_nodes, output_nodes) {
    this.input_nodes = input_nodes
    this.hidden_nodes = hidden_nodes
    this.output_nodes = output_nodes
    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes, 'weights_ih')
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes, 'weights_ho')
    this.weights_ih.randomise()
    this.weights_ho.randomise()

    this.bias_h = new Matrix(this.hidden_nodes, 1)
    this.bias_o = new Matrix(this.output_nodes, 1)
    this.bias_h.randomise()
    this.bias_o.randomise()
    this.learning_rate = .1
  }

  setLearningRate (rate) {
    this.learning_rate = rate
  }

  feedforward (input_array) {

    // Generating the Hidden Output
    const inputs = Matrix.fromArray(input_array)
    const hidden = Matrix.multiply(this.weights_ih, inputs)
    hidden.add(this.bias_h)
    // activation function
    hidden.map(sigmoid)

    // Generating the Output's output's
    let output = Matrix.multiply(this.weights_ho, hidden)
    output.add(this.bias_o)
    output.map(sigmoid)

    // sending back to caller
    return output.toArray()
  }

  train (input_array, target_array) {
    // here we, here we, here we fukin go
    // let outputs = this.feedforward(inputs)
    // =================
    // Generate hidden outputs
    let inputs = Matrix.fromArray(input_array)
    let hidden = Matrix.multiply(this.weights_ih, inputs)
    hidden.add(this.bias_h)
    // Activation function
    hidden.map(sigmoid)

    // Generating the Output's output
    let outputs = Matrix.multiply(this.weights_ho, hidden)
    outputs.add(this.bias_o)
    outputs.map(sigmoid)
    // =======================

    // Convert array to Matrix object
    let targets = Matrix.fromArray(target_array)

    // Calculate the err = Targets - Outputs
    let output_errors = Matrix.subtract(targets, outputs)

    // calculate gradient
    let gradients = Matrix.map(outputs, dsigmoid)
    let gradients2 = Matrix.map(outputs, dsigmoid)
    // console.log('...', gradients.data, output_errors.data)

    // WARNING: NaN creator
    gradients.multiply(output_errors)
    // WARNING: NaN creator

    gradients.multiply(this.learning_rate)

    // Calculate deltas
    let hidden_t = Matrix.transpose(hidden)
    let weight_ho_deltas = Matrix.multiply(gradients, hidden_t)

    // ?????? proffit ??
    // Adjust the weigths by deltas
    this.weights_ho.add(weight_ho_deltas)
    // Adjust the bias by its deltas which is just the gradient
    this.bias_o.add(gradients)

    // Weigths Hidden to Output Transposed
    let who_t = Matrix.transpose(this.weights_ho)
    // calculate the hidden layer errors
    let hidden_errors = Matrix.multiply(who_t, output_errors)

    // Calculate hidden gradient
    let hidden_gradient = Matrix.map(hidden, dsigmoid)
    hidden_gradient.multiply(hidden_errors)
    hidden_gradient.multiply(this.learning_rate)

    // Calculate input->hiddent deltas
    let inputs_T = Matrix.transpose(inputs)
    let weights_ih_deltas = Matrix.multiply(hidden_gradient, inputs_T)

    this.weights_ih.add(weights_ih_deltas)
    // Adjust the bias by its deltas (which is just the gradient)
    this.bias_h.add(hidden_gradient)

    // outputs.print()
    // targets.print()
    // output_errors.print()
  }

}
































//
