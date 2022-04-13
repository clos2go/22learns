console.clear()

//INSTRUCTIONS
//Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
// In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:

//EXAMPLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let string = 'Hello, my name is Kevin.'
let regexTest = /Kevin/
//looking for regex test in string
let res1 = regexTest.test(string)
console.log(res1)

//SOLUTION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let waldoIsHiding = 'Somewhere Waldo is hiding in this text.'
let waldoRegex = /Waldo/
let res2 = waldoRegex.test(waldoIsHiding)
console.log(res2)

//TESTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// //STARTER
// let waldoIsHiding = 'Somewhere Waldo is hiding in this text.'
// let waldoRegex = /search/ // Change this line
// let result = waldoRegex.test(waldoIsHiding)

// NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//STARTER CODE
