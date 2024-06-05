const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) =>
    b !== 0 ? a / b : "Error: Division by zero is not possible",
  modulus: (a, b) => a % b,
  exponent: (a, b) => Math.pow(a, b),
}

// default export
export default calculator
