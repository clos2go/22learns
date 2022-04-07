console.clear()

function unCurried(x, y) {
  return x + y
}

// function curried(x) {
//   return function (y) {
//     return x + y
//   }
// }

// const curried = (x) => (y) => x + y

// curried(1)(2)
// console.log(curried(1)(2))

// const funcForY = curried(1)
// console.log(funcForY(2))

// function impartial(x, y, z) {
//   return x + y + z
// }

// const partialFn = impartial.bind(this, 1, 2)
// partialFn(10)
// console.log(partialFn(10))

// function add(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z
//     }
//   }
// }

//one liner

function add(x) {
  return (y) => (z) => x + y + z
}

console.log(add(10)(20)(30)) //should return 60.
console.log(add(1)(2)(3)) //should return 6.
console.log(add(11)(22)(33)) //should return 66
