console.clear()

// function diffArray(arr1, arr2) {
//   // let intersection = arr1.filter((x) => arr2.includes(x))
//   // console.log(intersection)
//   let difference = arr1
//     .filter((x) => !arr2.includes(x))
//     .concat(arr2.filter((x) => !arr1.includes(x)))
//   console.log(difference)
//   return difference
// }

// // shorter using filter
// function diffArray(arr1, arr2) {
//   return arr1
//     .filter((x) => !arr1.includes(x))
//     .concat(arr2.filter((x) => !arr1.includes(x)))
// }

//Merge arrays; filter unique elements

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter((item) => !arr1.includes(item) || !arr2.includes(item))
// }

//Declarative Solution

function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)]
  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1)
  }
}

// //Compare both arrays to each other and push to newArr if unique
// function diffArray(arr1, arr2) {
//   var newArr = []

//   function onlyInFirst(first, second) {
//     for (var i = 0; i < first.length; i++) {
//       if (second.indexOf(first[i]) === -1) {
//         newArr.push(first[i])
//       }
//     }
//   }
//   onlyInFirst(arr1, arr2)
//   onlyInFirst(arr2, arr1)
//   return newArr
// }

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) //should return an array.
// console.log(
//   ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//   ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
// ) //should return ["pink wool"].
// console.log(
//   ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//   ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
// ) //should return an array with one item.
// console.log(
//   ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//   ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
// ) //should return ["diorite", "pink wool"].
// console.log(
//   ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//   ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
// ) //should return an array with two items.
// console.log(
//   ['andesite', 'grass', 'dirt', 'dead shrub'],
//   ['andesite', 'grass', 'dirt', 'dead shrub']
// ) //should return [].
// console.log(
//   ['andesite', 'grass', 'dirt', 'dead shrub'],
//   ['andesite', 'grass', 'dirt', 'dead shrub']
// ) //should return an empty array.
// console.log([1, 2, 3, 5], [1, 2, 3, 4, 5]) //should return [4].
// console.log([1, 2, 3, 5], [1, 2, 3, 4, 5]) //should return an array with one item.
// console.log([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]) //should return ["piglet", 4].
// console.log([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]) //should return an array with two items.
// console.log([], ['snuffleupagus', 'cookie monster', 'elmo']) //should return ["snuffleupagus", "cookie monster", "elmo"].
// console.log([], ['snuffleupagus', 'cookie monster', 'elmo']) //should return an array with three items.
// console.log([1, 'calf', 3, 'piglet'], [7, 'filly']) //should return [1, "calf", 3, "piglet", 7, "filly"].
// console.log([1, 'calf', 3, 'piglet'], [7, 'filly']) //should return an array with six items.
