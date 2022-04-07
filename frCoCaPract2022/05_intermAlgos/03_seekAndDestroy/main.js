console.clear()

// filter((x) => !arr2.includes(x))

// //My solution
// function destroyer(arr) {
//   const valsToRemove = Object.values(arguments).slice(1)
//   return arr.filter((val) => !valsToRemove.includes(val))
// }

// //find Object values then for loop and destroy
// function destroyer(arr) {
//   let valsToRemove = Object.values(arguments).slice(1)

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < valsToRemove.length; j++) {
//       if (arr[i] === valsToRemove[j]) {
//         delete arr[i]
//       }
//     }
//   }
//   return arr.filter((item) => item !== null)
// }

function destroyer(arr, ...valsToRemove) {
  return arr.filter((elem) => !valsToRemove.includes(elem))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) //should return [1, 1].
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) //should return [1, 5, 1].
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) //should return [1].
// console.log(destroyer([2, 3, 2, 3], 2, 3)) //should return [].
// console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53)) //should return ["hamburger"].
// console.log(
//   destroyer(
//     [
//       'possum',
//       'trollo',
//       12,
//       'safari',
//       'hotdog',
//       92,
//       65,
//       'grandma',
//       'bugati',
//       'trojan',
//       'yacht'
//     ],
//     'yacht',
//     'possum',
//     'trollo',
//     'safari',
//     'hotdog',
//     'grandma',
//     'bugati',
//     'trojan'
//   )
// ) //should return [12,92,65].
