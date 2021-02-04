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

// the remainder operator
console.log(5 % 2); //1
console.log(5 % 3); //2
console.log(12 % 5); //2

// you can use the odd or even to do functions etc with

const isEven = (n) => n % 2 === 0;
console.log(isEven(322)); //true
console.log(isEven(16)); //true
console.log(isEven(351)); //false
console.log(isEven(11)); //false

//list experiment
console.log(document.querySelectorAll(".list li")); //[6]nodelist

[...document.querySelectorAll(".list li")].forEach(function (li, i) {
  // console.log(li, i);
  // 0,2,4,6 etc all even
  if (i % 2 === 0) li.style.backgroundColor = "purple";
  //0,3,6,9 etc all odd
  if (i % 3 === 0) li.style.backgroundColor = "green";
});
