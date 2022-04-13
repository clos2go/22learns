console.clear()

//INSTRUCTIONS

/**Complete the regex petRegex to match the pets dog, cat, bird, or fish. */

//EXAMPLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* Using regexes like /coding/, you can look for the pattern coding in another string.
This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.
This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.
You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.*/

//SOLUTION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let petString = 'James has a pet cat.'
let petRegex = /dog|cat|bird|fish/
let result = petRegex.test(petString)
//TESTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const test1 = (petString) => {
  let petRegex = /dog|cat|bird|fish/
  let result = petRegex.test(petString)
  return result
}
console.log(test1('John has a pet dog'))
console.log(test1('Emma has a pet rock'))
console.log(test1('Emma has a pet bird.'))
console.log(test1('Kara has a pet dolphin.'))
console.log(test1('Alice has a pet fish.'))
console.log(test1('Jimmy has a pet computer.'))

//STARTER

// let petString = "James has a pet cat."
// let petRegex = //; //Change this line
// let results = petRegex.test(petString)

// NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~