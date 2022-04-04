console.clear()

// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

// //For loop and add str value x times
function repeatStringNumTimes(str, num) {
  let newStr = ''
  if (num <= 0) {
    return newStr
  } else {
    for (let i = num; i > 0; i--) {
      newStr += str
    }
    return newStr
  }
}

// //RECURSION
// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return ''
//   } else {
//     return str + repeatStringNumTimes(str, num - 1)
//   }
// }

// //RECURSION 1 liner
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : ''
// }

console.log(repeatStringNumTimes('*', 3)) // should return the string ***.
console.log(repeatStringNumTimes('abc', 3)) //should return the string abcabcabc.
console.log(repeatStringNumTimes('abc', 4)) //should return the string abcabcabcabc.
console.log(repeatStringNumTimes('abc', 1)) //should return the string abc.
console.log(repeatStringNumTimes('*', 8)) //should return the string ********.
console.log(repeatStringNumTimes('abc', -2)) //should return an empty string ("").
// The built-in repeat() method should not be used.
console.log(repeatStringNumTimes('abc', 0)) //should return "".
