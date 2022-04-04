console.clear()

const numbers = [1, 5, 8, 0, 10, 11]

const numsGreaterThanTen = numbers.every(function (currentValue) {
  return currentValue < 10
})

console.log(numsGreaterThanTen)

//One liner
// function checkPositive(arr) {
//   return arr.every((num) => num > 0)
// }

//LONGER
function checkPositive(arr) {
  return arr.every(function (num) {
    return num > 0
  })
}

console.log(checkPositive([1, 2, 3, -4, 5])) //should return false.
console.log(checkPositive([1, 2, 3, 4, 5])) //should return true.
console.log(checkPositive([1, -2, 3, -4, 5])) //should return false
