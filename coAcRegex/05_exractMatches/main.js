console.clear()

//EXAMPLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*So far, you have only been checking if a pattern exists or not within a string.
You can also extract the actual matches you found with the .match() method.
To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
Here's an example:*/

let first = 'Hello, World!'.match(/Hello/)
console.log(first)

let ourStr = 'Regular expressions'
let ourRegex = /expressions/
let second = ourStr.match(ourRegex)
console.log(second)
//INSTRUCTIONS
/*Apply the .match() method to extract the string coding.*/
//SOLUTION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let extractStr = "Extract the word 'coding' from this string."
let codingRegex = /coding/
let result = extractStr.match(codingRegex)
console.log(result)
//TESTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//STARTER
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /change/; // Change this line
// let result = extractStr; // Change this line
// NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
