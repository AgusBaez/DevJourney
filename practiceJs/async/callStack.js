const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const triangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

triangle(3, 4, 5);//true
