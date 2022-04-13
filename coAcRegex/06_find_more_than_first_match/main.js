console.clear()

//EXAMPLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*So far, you have only been able to extract or search a pattern once.*/
//Only returns first occurence
let testStr = 'Repeat, Repeat, Repeat'
let ourRegex = /Repeat/
let res1 = testStr.match(ourRegex)
console.log(res1)
//Here match would return ["Repeat"].

let repeatedRegex = /Repeat/g
let res2 = testStr.match(repeatedRegex)
console.log(res2)
// And here match returns the value ["Repeat", "Repeat", "Repeat"]
//INSTRUCTIONS
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
// Note
// You can have multiple flags on your regex like /search/gi
//SOLUTION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let twinkleStar = 'Twinkle, twinkle, twinkle, little starr.'
let starRegex = /Twinkle/gi
let result = twinkleStar.match(starRegex)
console.log(result)
//TESTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//STARTER

// NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
