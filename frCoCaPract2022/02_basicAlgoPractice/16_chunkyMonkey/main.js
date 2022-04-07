console.clear()

// Chunky Monkey
// Write a function that splits an array (first argument) into groups
// the length of size (second argument) and returns them as a two-dimensional array.

//Weird try.... maybe something here?
// function chunkArrayInGroups(arr, size) {
//   let arr1 = arr.slice(0, size)
//   console.log(arr1)
//   let arr2 = arr.slice(size)
//   let arr3 = arr.slice (size + size)
//   console.log(arr3)
//   let arr4 = [arr1, arr2, arr3]
//   return arr4
// }

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr
}

// //2 empty arrays > for loops test > push to temp arr in loop > modulus > temp = empty => push result
// function chunkArrayInGroups(arr, size) {
//   let temp = []
//   let result = []

//   for (let a = 0; a < arr.length; a++) {
//     if (a % size !== size - 1) temp.push(arr[a])
//     else {
//       temp.push(arr[a])
//       result.push(temp)
//       temp = []
//     }
//   }
//   if (temp.length !== 0) result.push(temp)
//   return result
// }

// //empty arr > loop until arr.length > in loop, push using slice(i + i + size) > increment size onto i
// function chunkArrayInGroups(arr, size) {
//   let newArr = []
//   let i = 0

//   while (i < arr.length) {
//     newArr.push(arr.slice(i, i + size))
//     i += size
//   }
//   return newArr
// }

// //cleaner than up one
// function chunkArrayInGroups(arr, size) {
//   let newArr = []
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size))
//   }
//   return newArr
// }

// //Recursive

// function chunkArrayInGroups(arr, size) {
//   if (arr.length <= size) {
//     return [arr]
//   } else {
//     return [arr.slice(0, size)].concat(
//       chunkArrayInGroups(arr.slice(size), size)
//     )
//   }
// }

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)) //should return [["a", "b"], ["c", "d"]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) //should return [[0, 1, 2], [3, 4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)) //should return [[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)) //should return [[0, 1, 2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)) //should return [[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)) //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
