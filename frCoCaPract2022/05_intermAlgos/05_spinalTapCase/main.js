console.clear()

// function spinalCase(str) {
//   let regex = /\s+|_+/g
//   str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
//   return str.replace(regex, '-').toLowerCase()
// }

// function spinalCase(str) {
//   str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
//   return str
//     .toLowerCase()
//     .split(/(?:_| )+/)
//     .join('-')
// }

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}

console.log(spinalCase('This Is Spinal Tap')) //should return the string this-is-spinal-tap.
console.log(spinalCase('thisIsSpinalTap')) //should return the string this-is-spinal-tap.
console.log(spinalCase('The_Andy_Griffith_Show')) //should return the string the-andy-griffith-show.
console.log(spinalCase('Teletubbies say Eh-oh')) //should return the string teletubbies-say-eh-oh.
console.log(spinalCase('AllThe-small Things')) //should return the string all-the-small-things.
