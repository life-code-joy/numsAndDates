console.log(Math.max(45, 7, 33, 2));

console.log(Math.random() * 5);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  // Math.trunc(Math.random() * (max - min) + 1) + min;
  // changed to floor because this will work with positive or negative numbers
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// rounding decimals
