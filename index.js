// EXAMPLE 1 - Round a Number (up or down) to the Nearest 5 in JavaScript

function roundNearest5(num) {
  return Math.round(num / 5) * 5;
}

console.log(roundNearest5(12)); // 👉️ 10
console.log(roundNearest5(13)); // 👉️ 15
console.log(roundNearest5(-13)); // 👉️ -15
console.log(roundNearest5(-12)); // 👉️ -10
console.log(roundNearest5(32.4)); // 👉️ 30
console.log(roundNearest5(32.5)); // 👉️ 35

// ------------------------------------------------------------------

// // EXAMPLE 2 - Round a Number UP to the next multiple of 5 in JavaScript

// function roundNearest5(num) {
//   return Math.ceil(num / 5) * 5;
// }

// console.log(roundNearest5(16)); // 👉️ 20
// console.log(roundNearest5(12)); // 👉️ 15
// console.log(roundNearest5(11)); // 👉️ 15
// console.log(roundNearest5(-13)); // 👉️ -10
// console.log(roundNearest5(32.4)); // 👉️ 35

// ------------------------------------------------------------------

// // EXAMPLE 3 - Round a number DOWN to the nearest multiple of 5 in JavaScript

// function roundNearest5(num) {
//   return Math.floor(num / 5) * 5;
// }

// console.log(roundNearest5(16)); // 👉️ 15
// console.log(roundNearest5(12)); // 👉️ 10
// console.log(roundNearest5(11)); // 👉️ 10
// console.log(roundNearest5(-13)); // 👉️ -15
// console.log(roundNearest5(34.6)); // 👉️ 30

// ------------------------------------------------------------------

// // EXAMPLE 4 - Round a Number to the nearest 10 in JavaScript

// function roundToNearest10(num) {
//   return Math.round(num / 10) * 10;
// }

// console.log(roundToNearest10(71)); // 👉️ 70
// console.log(roundToNearest10(79.9)); // 👉️ 80
// console.log(roundToNearest10(70.01)); // 👉️ 70
// console.log(roundToNearest10(-44)); // 👉️ -40
// console.log(roundToNearest10(-46)); // 👉️ -50

// ------------------------------------------------------------------

// // EXAMPLE 5 - Round a Number UP/Down to the Nearest 10 using Math.ceil and Math.floor

// // ✅ Round a number UP to the nearest 10
// function roundUpNearest10(num) {
//   return Math.ceil(num / 10) * 10;
// }

// console.log(roundUpNearest10(71)); // 👉️ 80
// console.log(roundUpNearest10(79.9)); // 👉️ 80
// console.log(roundUpNearest10(70.01)); // 👉️ 80
// console.log(roundUpNearest10(-49)); // 👉️ -40
// console.log(roundUpNearest10(-50)); // 👉️ -50

// // ----------------------------------------------

// // ✅ Round a number DOWN to the nearest 10
// function roundDownToNearest10(num) {
//   return Math.floor(num / 10) * 10;
// }

// console.log(roundDownToNearest10(39)); // 👉️ 30
// console.log(roundDownToNearest10(31)); // 👉️ 30
// console.log(roundDownToNearest10(399.999)); // 👉️ 390
// console.log(roundDownToNearest10(-409)); // 👉️ -410
// console.log(roundDownToNearest10(-401)); // 👉️ -410

// ------------------------------------------------------------------

// // EXAMPLE 6 - Round a Number (up or down) to the Nearest 100 in JavaScript

// function roundNearest100(num) {
//   return Math.round(num / 100) * 100;
// }

// console.log(roundNearest100(349)); // 👉️ 300
// console.log(roundNearest100(350)); // 👉️ 400
// console.log(roundNearest100(175.1)); // 👉️ 200
// console.log(roundNearest100(-351)); // 👉️ -400
// console.log(roundNearest100(-350)); // 👉️ -300

// ------------------------------------------------------------------

// // EXAMPLE 7 - Round a Number Up/Down to the Nearest 100 using Math.ceil and Math.floor

// function roundUpToNearest100(num) {
//   return Math.ceil(num / 100) * 100;
// }

// console.log(roundUpToNearest100(101)); // 👉️ 200
// console.log(roundUpToNearest100(199)); // 👉️ 200
// console.log(roundUpToNearest100(100.001)); // 👉️ 200
// console.log(roundUpToNearest100(-399)); // 👉️ -300
// console.log(roundUpToNearest100(-301)); // 👉️ -300
