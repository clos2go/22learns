console.clear()

// const squareList = (arr) => {
//   const positiveIntegers = arr.filter(function (item) {
//     return item - Math.floor(item) !== 0
//   })
// }

// vals = [-3, 4.8, 5, 3, -3.2]
// vals = vals.filter(isPositiveWholeNum)
// // console.log(vals)

// function isPositiveWholeNum(num) {
//   return num > 0 && num - Math.floor(num) === 0
// }

// const squareList = (arr) => {
//   return arr.filter(isPositiveWholeNum).map((num) => num * num)
// }

//My solution
const squareList = (arr) => {
  return arr
    .filter((num) => {
      return num > 0 && num - Math.floor(num) === 0
    })
    .map((num) => Math.pow(num, 2))
}

// //using isInteger()
// const squareList = (arr) => {
//   return arr.reduce((squaredIntegers, num) => {
//     return Number.isInteger(num) && num > 0
//       ? squaredIntegers.concat(num * num)
//       : squaredIntegers
//   }, [])
// }

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)

// console.log(squareList([-3, 4.8, 5, 3, -3.2]))
// console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]))
// console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]))
