# Robyn Veitch Unit 10

## Neural Network Library
### This library is based off of a series by [The Coding Train](https://github.com/shiffman). See [Coding Train Youtube Channel](https://www.youtube.com/user/shiffman/videos) for more

---

This work in progress build for a basic Neural Network library is intended to be used for the two components within the final Unit 10 system outcome:

- Voice Pattern Matcher
- Voice Analytics suite (to accompany the electroglottograph)

Later it will be likely replaced with a library like TensorFlow or PyTorch and most likely a pre-trained model for the sake of function over experimentation but for now serves as a prototypal build for the above designs.

```
File Structure:
/
|  colour_predictor.html (decides whether to use black or white text based on background)
|  xor.html (visualises the XOR problem being solved (sometimes))
|  nn_library/
|  |  index.html (testing file in js console)
|  |  matrix.js  (A custom matrix library for linear algebra)
|  |  nn.js      (The actual Neural Network file)
|  |  sketch.js  (Loads in index.html, runs with p5.js)
|  README.md
```

## robynveitch.com/
## robyn@robynveitch.com/
<!-- ## oddert.github.io/
## r.veitch0420171@arts.ac.uk -->

---

## Live Demo
[https://glow-steep-structure.glitch.me/](https://glow-steep-structure.glitch.me/)

## Installation
```
$ git clone https://github.com/Oddert/Unit-10-Neural-Networks.git
$ cd Unit-10-Neural-Networks
$ npm i
$ npm start
```

## Scripts
| script | command                                        | action
|--------|------------------------------------------------|------------------------------------------------|
| start  | node app.js                                    | runs the server                                |
| dev | nodemon app.js                                 | runs the server with auto restart              |