console.clear()

//EXAMPLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Sometimes you won't (or don't need to) know the exact characters in your patterns.
Thinking of all words that match, say, a misspelling would take a long time.
Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character.
The wildcard is also called dot and period.
You can use the wildcard character just like any other character in the regex.
For example, if you wanted to match hug, huh, hut, and hum,
you can use the regex /hu./ to match all four words.*/
//EXAMPLE
let humStr = "I'll hum a song"
let hugStr = 'Bear hug'
let huRegex = /hu./
let res1 = huRegex.test(humStr)
let res2 = huRegex.test(hugStr)
console.log(res1)
console.log(res2)
//INSTRUCTIONS
/*Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.
Your regex should use the wildcard character.*/
//SOLUTION 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let exampleStr = "let's have fun with regular expressions!"
let unRegex = /un./
let result = unRegex.test(exampleStr)
console.log(result)
//TESTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const test = (str) => {
  let unRegex = /un./
  let result = unRegex.test(str)
  return result
}
console.log(test("let's have run with regular expressions!"))
console.log(test("let's have sun with regular expressions!"))
console.log(test("let's have fun with regular expressions!"))
console.log(test("let's have pun with regular expressions!"))
console.log(test("let's have nun with regular expressions!"))
console.log(test("let's have bun with regular expressions!"))
//STARTER
// let exampleStr = "Let's have fun with regular expressions!"
// let unRegex = /change/ // Change this line
// let result = unRegex.test(exampleStr)
// NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
