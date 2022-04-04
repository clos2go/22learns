console.clear()

// EXAMPLE

const str = 'Hello World'
const bySpace = str.split(' ')

const otherString = 'How9are7you2today'
const byDigits = otherString.split(/\d/)

console.log(bySpace)
console.log(byDigits)

console.log(bySpace.join(' '))
console.log(byDigits.join(' '))

function splitify(str) {
  return str.split(/\W/)
}

console.log(splitify('Hello World,I-am code')) //Should return ["Hello", "World", "I", "am", "code"].
console.log(splitify('Earth-is-our home')) //ß∂should return ["Earth", "is", "our", "home"].
console.log(splitify('This.is.a-sentence')) //ß∂should return ["This", "is", "a", "sentence"].
