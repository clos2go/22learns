console.clear()

// Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// //split().reverse().join() Method
// function reverseString(str) {
//   let revStr = str.split('').reverse().join('')
//   return revStr
// }

//For Loop in reverse
function reverseString(str) {
  let revStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i]
  }
  return revStr
}

console.log(reverseString('hello')) //should return a string.

console.log(reverseString('hello')) //should return the string olleh.

console.log(reverseString('Howdy')) //should return the string ydwoH.

console.log(reverseString('Greetings from Earth')) //should return the string htraE morf sgniteerG.
