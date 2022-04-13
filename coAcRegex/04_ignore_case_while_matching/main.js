console.clear()

//EXAMPLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Up until now, you've looked at regexes to do literal matches of strings.
But sometimes, you might want to also match case differences.
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters.
Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
You can match both cases using what is called a flag.
There are other flags but here you'll focus on the flag that ignores case - the i flag.
You can use it by appending it to the regex. An example of using this flag is /ignorecase/i.
This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
*/

//INSTRUCTIONS
/*Write a regex fccRegex to match freeCodeCamp, no matter its case.
Your regex should not match any abbreviations or variations with spaces.*/

//SOLUTION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let myString = 'freeCodeCamp'
let fccRegex = /freeCodeCamp/i // Change this line
let result = fccRegex.test(myString)
//TESTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const test1 = (myString) => {
  let result = fccRegex.test(myString)
  return result
}

console.log(test1('freeCodeCamp'))
console.log(test1('FreeCodeCamp'))
console.log(test1('FreecodeCamp'))
console.log(test1('FreeCodecamp'))
console.log(test1('Free Code Camp'))
console.log(test1('FreeCOdeCamp'))
console.log(test1('FCC'))
console.log(test1('FrEeCoDeCamp'))
console.log(test1('FrEeCodECamp'))
console.log(test1('FReeCodeCAmp'))
//STARTER
// let myString = "freeCodeCamp"
// let fccRegex = //  // Change this line
// let result = fccRegex.test(myString)
// NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//STARTER CODE
