console.clear()

// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string
//(second argument, target).

// This challenge can be solved with the .endsWith() method,
//which was introduced in ES2015. But for the purpose of this challenge,
//we would like you to use one of the JavaScript substring methods instead.

// //Compare str.slice end of word substring to target
// function confirmEnding(str, target) {
//   let strSlice = str.slice(str.length - target.length)
//   if (target === strSlice) {
//     return true
//   }
//   return false
// }

// //More concise version of prevvious
// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target
// }

// //using RegExpression
// function confirmEnding(str, target) {
//   let re = new RegExp(target + '$', 'i')
//   return re.test(str)
// }

//Negative slice === offset is take from the back of the string
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

console.log(confirmEnding('Bastian', 'n')) //should return true.

console.log(confirmEnding('Congratulation', 'on')) //should return true.

console.log(confirmEnding('Connor', 'n')) //should return false.

console.log(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  )
) //should return false.

console.log(confirmEnding('He has to give me a new name', 'name')) //should return true.

console.log(confirmEnding('Open sesame', 'same')) //should return true.

console.log(confirmEnding('Open sesame', 'sage')) //should return false.

console.log(confirmEnding('Open sesame', 'game')) //should return false.

console.log(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  )
) //should return false.

console.log(confirmEnding('Abstraction', 'action')) //should return true.

// //Your code should not use the built-in method .endsWith() to solve the challenge.
