console.clear()

// return arr.filter((val) => !valsToRemove.includes(val))

// function whatIsInAName(collection, source) {
//   const srcKeys = Object.keys(source)
//   // console.log(srcKeys)
//   return collection.filter((obj) => {
//     for (let i = 0; i < srcKeys.length; i++) {
//       if (
//         !obj.hasOwnProperty(srcKeys[i]) ||
//         obj[srcKeys[i]] !== source[srcKeys[i]]
//       ) {
//         return false
//       }
//     }
//     return true
//   })
// }

// function whatIsInAName(collection, source) {
//   const srcKeys = Object.keys(source)
//   return collection.filter((obj) =>
//     srcKeys.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
//   )
// }

function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source)

  return collection.filter((obj) =>
    srcKeys
      .map((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b)
  )
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    { last: 'Capulet' }
  )
) //should return [{ first: "Tybalt", last: "Capulet" }].
// console.log(
//   whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
//     apple: 1
//   })
// ) //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, bat: 2 }
//   )
// ) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, cookie: 2 }
//   )
// ) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(
//   whatIsInAName(
//     [
//       { apple: 1, bat: 2 },
//       { apple: 1 },
//       { apple: 1, bat: 2, cookie: 2 },
//       { bat: 2 }
//     ],
//     { apple: 1, bat: 2 }
//   )
// ) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })) //should return []
