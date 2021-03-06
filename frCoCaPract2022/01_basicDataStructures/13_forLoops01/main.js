console.clear()

//Iterate through All an array's items using a for loop

function filteredArray(arr, elem) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

//TESTS
console.log(
  filteredArray(
    [
      [3, 2],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
)

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
) //should return [[10, 8, 3], [14, 6, 23]]

console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
) //hould return [["flutes", 4]]

console.log(
  filteredArray(
    [
      ["amy", "beth", "sam"],
      ["dave", "sean", "peter"],
    ],
    "peter"
  )
) //should return [["amy", "beth", "sam"]]

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
) //should return []
