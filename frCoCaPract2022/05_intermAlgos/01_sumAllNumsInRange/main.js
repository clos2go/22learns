console.clear()

// //for loop with counterf
// function sumAll(arr) {
//   let start
//   let end
//   if (arr[0] < arr[1]) {
//     start = arr[0]
//     end = arr[1]
//   } else {
//     start = arr[1]
//     end = arr[0]
//   }
//   let sum = start
//   for (let i = start; i < end; i++) {
//     start++
//     sum += start
//   }
//   return sum
// }

// //Shorter for loop w/Math.min and Math.max
// function sumAll(arr) {
//   let sum = 0
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i
//   }
//   return sum
// }

// function sumAll(arr) {
//   const large = Math.max(...arr)
//   const small = Math.min(...arr)
//   const diff = large + 1 - small
// }

//absolute value
const sumAll = (arr) => {
  const start = arr[0]
  const end = arr[1]

  const numCount = Math.abs(start - end) + 1
  const sum = ((start + end) * numCount) / 2
  return sum
}

console.log(sumAll([1, 4])) //should return a number.
console.log(sumAll([1, 4])) //should return 10.
console.log(sumAll([4, 1])) //should return 10.
console.log(sumAll([5, 10])) //should return 45.
console.log(sumAll([10, 5])) //should return 45.
