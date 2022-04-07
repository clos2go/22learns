console.clear()

// function largestOfFour(arr) {
//   return Math.max(...arr.map((word) => word.length))
// }
//For Loop + Math.max() <-------- My solution
function largestOfFour(arr) {
  let largeNumsArr = []
  for (let i = 0; i < arr.length; i++) {
    largestNum = 0
    let largeNum = Math.max(...arr[i])
    largeNumsArr.push(largeNum)
  }
  return largeNumsArr
}

// //PROCEDURAL APPROACH -
// function largestOfFour(arr) {
//   let results = []
//   for (let i = 0; i < arr.length; i++) {
//     let largestNumber = arr[i][0]
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNumber) {
//         largestNumber = arr[i][j]
//       }
//     }
//     results[i] = largestNumber
//   }
//   return results
// }

// //Declarative Approach

// function largestOfFour(arr) {
//   return arr.map(function (group) {
//     return group.reduce(function (prev, current) {
//       return current > prev ? current : prev
//     })
//   })
// }

// //Declarative Approach
// function largestOfFour(arr) {
//   return arr.map(Function.apply.bind(Math.max, null))
// }

// //recursive approach
// function largestOfFour(arr, finalArr = []) {
//   return !arr.length
//     ? finalArr
//     : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
// }

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
) //should return an array.

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
) //should return [27, 5, 39, 1001].

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
) //should return [9, 35, 97, 1000000].

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
) //should return [25, 48, 21, -3].
