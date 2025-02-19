function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers'); // Or handle it differently, e.g., return 0;
  }
  return a + b;
}

let x = foo(2, 3);
console.log(x);

let y = foo(2, 'hello');
console.log(y); // Throws an error