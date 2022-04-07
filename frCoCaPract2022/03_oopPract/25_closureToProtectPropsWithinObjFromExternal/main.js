console.clear()

// // EXAMPLE
// function Bird() {
//   let hatchedEgg = 10

//   this.getHatchedEggCount = function () {
//     return hatchedEgg
//   }
// }
// let ducky = new Bird()
// // ducky.getHatchedEggCount()
// console.log(ducky.getHatchedEggCount())

function Bird() {
  let weight = 15
  this.getWeight = function () {
    return weight
  }
}

let ducky = new Bird()
console.log(ducky.getWeight())
