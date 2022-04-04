console.clear()

// //Terneray
// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/
//   let myConsonants = str.match(consonantRegex)
//   return myConsonants !== null
//     ? str.replace(consonantRegex, '').concat(myConsonants).concat('ay')
//     : str.concat('way')
// }
// //Longer
// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/
//   let myConsonants = str.match(consonantRegex)
//   // return myConsonants !== null
//   if (myConsonants !== null) {
//     return str.replace(consonantRegex, '').concat(myConsonants).concat('ay')
//   } else {
//     return str.concat('way')
//   }
// }

// //regex + match + ifElse + indexOf + substr
// function translatePigLatin(str) {
//   let pigLatin = ''
//   let regex = /[aeiou]/gi

//   if (str[0].match(regex)) {
//     pigLatin = str + 'ay'
//   } else if (str.match(regex) === null) {
//     pigLatin = str + 'ay'
//   } else {
//     let vowelIndice = str.indexOf(str.match(regex)[0])
//     pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay'
//   }
//   return pigLatin
// }

// //1 line funcition to get vowel words
// //find consonant or cluster, return it at the end and add 'ay'
// function translatePigLatin(str) {
//   if (str.match(/^[aeiou]/)) return str + 'way'

//   const consonantCluster = str.match(/^[^aeiou]+/)[0]
//   console.log(consonantCluster)
//   console.log(str.substring(consonantCluster.length))
//   return str.substring(consonantCluster.length) + consonantCluster + 'ay'
// }

// //Replace and regex
// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, '$&way')
//     .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay')
// }

function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
    ? str + 'ay'
    : translatePigLatin(str.slice(1) + str[0], charPos + 1)
}

console.log(translatePigLatin('consonant')) //should return the string onsonantcay
console.log(translatePigLatin('california')) //should return the string aliforniacay.
console.log(translatePigLatin('paragraphs')) //should return the string aragraphspay.
console.log(translatePigLatin('glove')) //should return the string oveglay.
console.log(translatePigLatin('algorithm')) //should return the string algorithmway.
console.log(translatePigLatin('eight')) //should return the string eightway.
console.log(translatePigLatin('schwartz')) //artzschway
console.log(translatePigLatin('rhythm')) // rythmmay
// Should handle words where the first vowel comes in the middle of the word.
// translatePigLatin("schwartz") should return the string artzschway.
// Should handle words without vowels. translatePigLatin("rhythm")
// should return the string rhythmay.
//

///Stuff I started and never finished and didn't work
// function translatePigLatin(str) {
//   const vowelIndex = 0
//   const firstChar = str.slice(vowelIndex, 1)
//   console.log(firstChar)
//   const remWord = str.slice(vowelIndex + 1)
//   console.log(remWord)
//   const pigLatinVowel = remWord + firstChar + `ay`
//   const vowels = ['a', 'e', 'i', 'o', 'u']

//   for (let i = 0; i < vowels.length; i++) {
//     if charAt
//   }

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {
//       if (str.charAt(0) !== vowel)
//     } else if (str[i] === vowels[j]) {
//         return str + `way`
//     } else {
//     }
//   }
// }

// for (let j = 0; j < str.length; j++) {
//       if (str[j] !== vowels[i]) {
//       console.log(vowelIndex = i)
//       return pigLatinVowel
//     } else {
//       return str + `way`
//     }
//   }
