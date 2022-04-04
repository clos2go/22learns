console.clear()

function alphabeticalOrder(arr) {
  return arr.sort()
}

//ASCENDING
function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1
  })
}
reverseAlpha(['l', 'h', 'z', 'b', 's'])
// Returns ['z', 's', 'l', 'h', 'b']

// alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])

console.log(`reg alpha: `, alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) //should return ["a", "a", "c", "d", "g", "z"].
console.log(`reg alpha: `, alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) //should return ["a", "h", "m", "m", "n", "x"].
console.log(`reg alpha: `, alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) //should return ["a", "a", "a", "a", "t", "x"].

console.log(`reverse Alpha: `, reverseAlpha(['a', 'd', 'c', 'a', 'z', 'g'])) //should return ['z', 'g', 'd', 'c', 'a', 'a'].
console.log(`reverse Alpha: `, reverseAlpha(['x', 'h', 'a', 'm', 'n', 'm'])) //should return ['x', 'n', 'm', 'm', 'h', 'a' ].
console.log(`reverse Alpha: `, reverseAlpha(['a', 'a', 'a', 'a', 'x', 't'])) //should return ['x', 't', 'a', 'a', 'a', 'a' ].
