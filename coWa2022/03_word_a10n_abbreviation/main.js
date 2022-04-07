console.clear()

// The word i18n is a common abbreviation of internationalization in the developer community,
// used instead of typing the whole word and trying to spell it correctly. Similarly,
// a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words"
// (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters.
// By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter,
// then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

// //Long Submission
// const abbreviate = function (string) {
//   let strArr = string.split(/[ ]+/)
//   let abrArr = []

//   for (let i = 0; i < strArr.length; i++) {
//     const pushPatternI = `${strArr[i][0]}${strArr[i].length - 2}${
//       strArr[i][strArr[i].length - 1]
//     }`
//     if (strArr[i].replace(/[^a-zA-Z ]/g, '').length <= 3) {
//       abrArr.push(strArr[i])
//     } else if (strArr[i].includes(',')) {
//       let comaEle = strArr[i].replace(/[^a-zA-Z ]/g, '')
//       const comaPattern = `${comaEle[0]}${comaEle.length - 2}${
//         comaEle[comaEle.length - 1]
//       },`
//       abrArr.push(comaPattern)
//     } else if (strArr[i].includes('-')) {
//       let hyphenArr = strArr[i].split('-')
//       let hyphenArrTemp = []
//       for (let j = 0; j < hyphenArr.length; j++) {
//         const pushPatternJ = `${hyphenArr[j][0]}${hyphenArr[j].length - 2}${
//           hyphenArr[j][hyphenArr[j].length - 1]
//         }`
//         hyphenArrTemp.push(pushPatternJ)
//       }
//       abrArr.push(hyphenArrTemp.join('-'))
//     } else {
//       abrArr.push(pushPatternI)
//     }
//   }
//   return abrArr.join(' ')
// }

// //Best Practice and most Clever
// let find = /[a-z]{4,}/gi
// function replace(match) {
//   return match[0] + (match.length - 2) + match[match.length - 1]
// }

// function abbreviate(string) {
//   return string.replace(find, replace)
// }

// //replace, and new function to slice()
// function abbreviate(string) {
//   return string.replace(/\w{4,}/g, function (word) {
//     return word[0] + (word.length - 2) + word.slice(-1)
//   })
// }

/*1: Set up a remembered non-alphabetical delimiter for string.split(),
  2: and split the input string along this delimiter, returning an array of strings.
  3: For each element in the array of split input strings,
  4: If the length of that element (string) is >= 4 characters,
  5: Set that element to be an abbreviated version of itself.
  6: If the length of the element is not >=4, return the element as found.
  7: Finally, join all elements together, and return ss */

function abbreviate(string) {
  let na = /([^a-z])/i
  let ss = string.split(na)
  return ss
    .map(function (element) {
      if (element.length >= 4) {
        return (element =
          '' + element[0] + (element.length - 2) + element[element.length - 1])
      } else return element
    })
    .join((separator = ''))
}

console.log(abbreviate('internationalization')) //   "i18n";
console.log(abbreviate('accessibility')) //   "a11y";
console.log(abbreviate('elephant-ride')) //   "e6t-r2e";
console.log(abbreviate('Accessibility')) //   "A11y";
console.log(abbreviate('elephant-rides are really fun!')) // "e6t-r3s are r4y fun!"
console.log(
  abbreviate('You need, need not want, to complete this code-wars mission')
) //'You n3, n2d not w3, to c6e t2s c2e-w2s m5n' to equal 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n'
