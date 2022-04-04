console.clear()

// // For Loop and longWord Counter
// function findLongestWordLength(str) {
//   let longWord = ''
//   const wordArr = str.split(' ')

//   for (let i = 0; i < wordArr.length; i++) {
//     if (wordArr[i].length > longWord.length) {
//       longWord = wordArr[i]
//     }
//   }
//   return longWord.length
// }

// // REDUCE() and Math.max()
// function findLongestWordLength(str) {
//   return str.split(' ').reduce(function (longest, word) {
//     console.log(word)
//     return Math.max(longest, word.length)
//   }, 0)
// }

//Math.max, spread operator, and map()
function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map((word) => word.length))
}

// //Recursive
// function findLongestWordLength(str) {
//   //split string into individual words
//   const words = str.split(' ')

//   //words only has 1 element left that is the longest element
//   if (words.length == 1) {
//     return words[0].length
//   }

//   //if words has multiple elements, remove the first element
//   // and recursively call the function
//   return Math.max(
//     words[0].length,
//     findLongestWordLength(words.slice(1).join(' '))
//   )
// }

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
) //should return a number.

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
) //should return 6.

console.log(findLongestWordLength('May the force be with you')) //should return 5.

console.log(findLongestWordLength('Google do a barrel roll')) //should return 6.

console.log(
  findLongestWordLength(
    'What is the average airspeed velocity of an unladen swallow'
  )
) //should return 8.

console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
)
//should return 19.
