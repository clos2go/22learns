console.clear()

// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

//WHILE LOOP
function factorialize(num) {
  let factorial = 1
  while (num > 0) {
    factorial *= num
    num--
  }
  return factorial
}

// //FOR LOOP
// function factorialize(num) {
//   let product = 1
//   for (let i = 2; i <= num; i++) {
//     product *= i
//   }
//   return product
// }

// //RECURSION
// function factorialize(num) {
//   if (num === 0) {
//     return 1
//   }
//   return num * factorialize(num - 1)
// }

// //TAIL RECURSION
// function factorialize(num, factorial = 1) {
//   if (num === 0) {
//     return factorial
//   } else {
//     return factorialize(num - 1, factorial * num)
//   }
// }

// //REDUCE()
// function factorialize(num) {
//   return num < 0
//     ? 1
//     : new Array(num)
//         .fill(undefined)
//         .reduce((product, _, index) => product * (index + 1), 1)
// }

console.log(`5: `, factorialize(5)) //should return a number.
console.log(`5: `, factorialize(5)) //should return 120.
console.log(`10: `, factorialize(10)) //should return 3628800.
console.log(`20: `, factorialize(20)) //should return 2432902008176640000.
console.log(`0: `, factorialize(0)) //should return 1.
