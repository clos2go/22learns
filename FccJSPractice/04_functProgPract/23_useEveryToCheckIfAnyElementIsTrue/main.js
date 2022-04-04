console.clear()

const numbers = [10, 50, 8, 220, 110, 11]

const someNums = numbers.some(function (currentValue) {
  return currentValue < 10
})

console.log(someNums)

// function checkPositive(arr) {
//   return arr.some((num) => num > 0)
// }

function checkPositive(arr) {
  return arr.some((num) => {
    return num > 0
  })
}

console.log(checkPositive([1, 2, 3, -4, 5])) //should return true.
console.log(checkPositive([1, 2, 3, 4, 5])) //should return true.
console.log(checkPositive([-1, -2, -3, -4, -5])) //should return false.
