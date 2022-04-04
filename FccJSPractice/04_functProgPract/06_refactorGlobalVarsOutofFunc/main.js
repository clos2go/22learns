console.clear()
// Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.
// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

// //STARTER
// // The global variable
// const bookList = [
//   'The Hound of the Baskervilles',
//   'On The Electrodynamics of Moving Bodies',
//   'Philosophiæ Naturalis Principia Mathematica',
//   'Disquisitiones Arithmeticae'
// ]

// // Change code below this line
// function add(bookName) {
//   bookList.push(bookName)
//   return bookList

//   // Change code above this line
// }

// // Change code below this line
// function remove(bookName) {
//   const book_index = bookList.indexOf(bookName)
//   if (book_index >= 0) {
//     bookList.splice(book_index, 1)
//     return bookList

//     // Change code above this line
//   }
// }

// The global variable
const bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae'
]

function add(list, bookName) {
  let newArr = [...list]
  newArr.push(bookName)
  return newArr
}

console.log(add(bookList, 'A Brief History of Time'))

// Change code below this line
function remove(list, bookName) {
  let newArr = [...list]
  const book_index = newArr.indexOf(bookName)
  if (book_index >= 0) {
    newArr.splice(book_index, 1)
    return newArr
  }
}

console.log(remove(bookList, 'The Hound of the Baskervilles'))
