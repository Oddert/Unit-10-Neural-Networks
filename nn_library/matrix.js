

class Matrix {
  constructor (rows, cols, caller) {
    this.rows = rows
    this.cols = cols
    this.data = []

    for (let i=0; i<this.rows; i++) {
      this.data[i] = []
      for (let j=0; j<this.cols; j++) {
        this.data[i][j] = 0
      }
    }

  }

  static fromArray (arr) {
    const m = new Matrix(arr.length, 1)
    for (let i=0; i<arr.length; i++) {
      m.data[i][0] = arr[i]
    }
    // console.log('st fromArray(arr) ', m)
    return m
  }

  static subtract (a, b) {
    let result = new Matrix(a.rows, b.cols)
    for (let i=0; i<result.rows; i++) {
      for (let j=0; j<result.cols; j++) {
        result.data[i][j] = a.data[i][j] - b.data[i][j]
      }
    }
    // console.log('st subtract(a,b) ', result)
    return result
  }

  toArray () {
    const arr = []
    for (let i=0; i<this.rows; i++) {
      for (let j=0; j<this.rows; j++) {
        arr.push(this.data[i][j])
      }
    }
    // console.log('toArray() ', arr)
    return arr
  }

  randomise () {
    for (let i=0; i<this.rows; i++) {
      for (let j=0; j<this.cols; j++) {
        this.data[i][j] = Math.random() * 2 - 1
        // // console.log(`randomise() i: ${i}, j: ${j}`, this.data[i][j])
      }
    }
  }

  static transpose (matrix) {
    // console.log(matrix)
    let result = new Matrix (matrix.cols, matrix.rows)
    for (let i=0; i<matrix.rows; i++) {
      for (let j=0; j<matrix.cols; j++) {
        result.data[j][i] = matrix.data[i][j]
      }
    }
    // console.log(`transpose()`, result)
    return result
  }

  static multiply (a, b) {
    if (a.cols !== b.rows) {
      console.warn('Columns of A must match rows of B')
      return undefined
    }
    let result = new Matrix(a.rows, b.cols)
    for (let i=0; i<result.rows; i++) {
      for (let j=0; j<result.cols; j++) {
        // Dot product of values in col
        let sum = 0;
        for (let k=0; k<a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j]
        }
        result.data[i][j] = sum
      }
    }
    return result
  }

  multiply (n) {
    // console.log('###', this.data, n)
    if (n instanceof Matrix) {
      for (let i=0; i<this.rows; i++) {
        for (let j=0; j<this.cols; j++) {
          this.data[i][j] *= n.data[i][j]
          // console.log(`multiply() i: ${i}, j ${j}`, this.data[i][j])
        }
      }
    } else {
      for (let i=0; i<this.rows; i++) {
        for (let j=0; j<this.cols; j++) {
          this.data[i][j] *= n
          // console.log(`multiply() i: ${i}, j ${j}`, this.data[i][j])
        }
      }
    }
  }

  static map (matrix_in, func) {
    const result = new Matrix(matrix_in.rows, matrix_in.cols)
    for (let i=0; i<matrix_in.rows; i++) {
      for (let j=0; j<matrix_in.cols; j++) {
        let val = matrix_in.data[i][j]
        result.data[i][j] = func(val)
      }
    }
    // console.log(`st map()`, result)
    return result
  }

  map (func) {
    for (let i=0; i<this.rows; i++) {
      for (let j=0; j<this.cols; j++) {
        let val = this.data[i][j]
        this.data[i][j] = func(val)
      }
    }
  }

  add (n) {
    if (n instanceof Matrix) {
      for (let i=0; i<this.rows; i++) {
        for (let j=0; j<this.cols; j++) {
          this.data[i][j] += n.data[i][j]
        }
      }
    } else {
      for (let i=0; i<this.rows; i++) {
        for (let j=0; j<this.cols; j++) {
          this.data[i][j] += n
        }
      }
    }
  }

  print () {
    console.table(this.data)
  }

}
