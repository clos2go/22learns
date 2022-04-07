console.clear()

const globalArray = [5, 6, 3, 2, 9]

function nonMutatingSort(arr) {
  let newArr = [...arr]
  return newArr.sort((a, b) => {
    return a - b
  })
}

function nonMutatingSortRev(arr) {
  let newArr = [...arr]
  return newArr.sort((a, b) => {
    return b - a
  })
}

// //concat into new empty array as a parameter then sort
// function nonMutatingSort(arr) {
//   return [].concat(arr).sort(function (a, b) {
//     return a - b
//   })
// }

nonMutatingSort(globalArray)
nonMutatingSortRev(globalArray)

console.log(nonMutatingSort(globalArray))
console.log(`reverse: `, nonMutatingSortRev(globalArray))

console.log(nonMutatingSort([1, 30, 4, 21, 100000])) //should return [1, 4, 21, 30, 100000].
console.log(nonMutatingSort([140000, 104, 99])) //should return [99, 104, 140000]

console.log(`reverse: `, nonMutatingSortRev([1, 30, 4, 21, 100000])) //should return [1, 4, 21, 30, 100000].
console.log(`reverse: `, nonMutatingSortRev([140000, 104, 99])) //should return [99, 104, 140000]
