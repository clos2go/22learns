console.clear()

// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

//use slice() and concat()
// function frankenSplice(arr1, arr2, n) {
//   const newArr = arr2
//     .slice(0, n)
//     .concat([...arr1])
//     .concat(arr2.slice(-n))
//   return newArr
// }

// //slice and then splice at n++ with a loop
// function frankenSplice(arr1, arr2, n) {
//   let localArr = arr2.slice()
//   for (let i = 0; i < arr1.length; i++) {
//     localArr.splice(n, 0, arr1[i])
//     n++
//   }
//   return localArr
// }

//Same as above but with spread syntax copy instead of for looping through arr1
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice()
  localArr.splice(n, 0, ...arr1)
  return localArr
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1)) //should return [4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ['a', 'b'], 1)) //should return ["a", 1, 2, "b"].
console.log(
  frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
)

// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.
