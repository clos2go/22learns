console.clear()
//Apply the regex myRegex on the string myString using the .test() method.

let myString = 'Hello, World!'
let myRegex = /Hello/
//string to test .test is (myString)
let result = myRegex.test(myString)

console.log(result)

// Example 2
let testStr = 'freeCodeCamp'
let testRegex = /Code/
let testResult = testRegex.test(testStr)

console.log(`Is the word Code found in 'freeCodeCamp':`, testResult)
