console.clear()
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

// //Check typeof
// function booWho(bool) {
//   if (typeof bool === 'boolean') {
//     return true
//   }
//   return false
// }

//typeof shorter

function booWho(bool) {
  return typeof bool === 'boolean'
}

console.log(booWho(true)) //should return true.
console.log(booWho(false)) //should return true.
console.log(booWho([1, 2, 3])) //should return false.
console.log(booWho([].slice)) //should return false.
console.log(booWho({ a: 1 })) //should return false.
console.log(booWho(1)) //should return false.
console.log(booWho(NaN)) //should return false.
console.log(booWho('a')) //should return false.
console.log(booWho('true')) //should return false.
console.log(booWho('false')) //should return false
