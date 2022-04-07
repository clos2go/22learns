console.clear()

//more solutions https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/javascript

// //My Submission
// //  slice end
// //  slice first part
// //  replace all chars in front half with ##
// //  combine both parts
// function maskify(cc) {
//   let lastFour = cc.slice(cc.length - 4)
//   let firstPart = cc.slice(0, cc.length - 4)
//   let hash = firstPart.replace(/[0-9a-zA-z ]/g, '#')
//   if (cc.length < 4) {
//     return cc
//   }
//   return hash + lastFour
// }

// //using slice().replace().slice()
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
// }

// //using only replace and complex regex
// function maskify(cc) {
//   return cc.replace(/.(?=....)/g, '#')
// }

// //pure regex
// function maskify(cc) {
//   return cc.replace(/.(?=.{4})/g, '#')
// }

function maskify(cc) {
  cc = cc.split('')
  for (let i = 0; i < cc.length - 4; i++) {
    cc[i] = '#'
  }
  cc = cc.join('')
  return cc
}

console.log(maskify('4556364607935616')) // '############5616'
console.log(maskify('64607935616')) // '"#######5616"
console.log(maskify('')) // ''
console.log(maskify('Skippy')) // '##ippy'
console.log(maskify('Nananananananananananananananana Batman!')) // "####################################man!"
console.log(maskify('11111')) // '#1111'
console.log(maskify('1')) // '1'
