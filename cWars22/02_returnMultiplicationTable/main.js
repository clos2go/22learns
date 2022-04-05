console.clear()

// Your task, is to create NxN multiplication table, of size provided in parameter.

////Using For loop and pushing to array
// multiplicationTable = function (size) {
//   let multiTable = []
//   for (let i = 1; i < size + 1; i++) {
//     let tableRow = []
//     for (let j = 1; j < size + 1; j++) {
//       // console.log(`i = ${i} * J = ${j}`)
//       tableRow.push(j * i)
//     }
//     multiTable.push(tableRow)
//   }
//   return multiTable
// }

//Using Matrix arrays
multiplicationTable = function (size) {
  let result = []

  for (let i = 0; i < size; i++) {
    result[i] = []
    for (let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1)
    }
  }
  return result
}

// //using map() function

// const multiplicationTable = function (size) {
//   return Array.apply(null, new Array(size)).map(function (val, i) {
//     return Array.apply(null, new Array(size)).map(function (val, j) {
//       return (i + 1) * (j + 1)
//     })
//   })
// }

// //One liner using map()
// multiplicationTable = (s, m = Array(s)) =>
//   [...m].map((_, i) => [...m].map((_, j) => i * ++j + j))

console.log(multiplicationTable(3))
