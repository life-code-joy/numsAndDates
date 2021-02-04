console.log(Math.max(45, 7, 33, 2));

console.log(Math.random() * 5);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  // Math.trunc(Math.random() * (max - min) + 1) + min;
  // changed to floor because this will work with positive or negative numbers
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

//Rounding  integers

console.log(Math.round(23.4)); //23
console.log(Math.round(23.9)); //24
console.log(Math.round(-23.2)); //-23

console.log(Math.ceil(23.9)); //24
console.log(Math.ceil(23.3)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.8)); //23

console.log(Math.trunc(23.8)); //23
console.log(Math.trunc(-23.8)); //-23
console.log(Math.floor(-23.2)); //-24

// rounding decimals
console.log((2.7).toFixed(2));
console.log(+(2.7).toFixed(2));
