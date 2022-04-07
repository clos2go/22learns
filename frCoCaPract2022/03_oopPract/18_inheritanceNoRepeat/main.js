console.clear()

// //Example
// function Bird(name) {
//   this.name = name
// }

// Bird.prototype = {
//   constructor: Bird
//   // describe: function () {   <----- Remove Describe since it is in the Animnal prototype
//   //   console.log(`My name is ${this.name}`)
//   // }
// }

// function Dog(name) {
//   this.name = name
// }

// Dog.prototype = {
//   constructor: Dog
//   // describe: function () {  <----- Remove Describe since it is in the Animnal prototype
//   //   console.log(`My name is ${this.name}`)
//   // }
// }

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   describe: function () {
//     console.log(`My name is ${this.name}`)
//   }
// }

function Cat(name) {
  this.name = name
}

Cat.prototype = {
  constructor: Cat
  // eat: function () {
  //   console.log(`nom nom nom`)
  // }
}

function Bear(name) {
  this.name = name
}

Bear.prototype = {
  constructor: Bear
  // eat: function () {
  //   console.log(`nom nom nom`)
  // }
}

function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log(`nom nom nom`)
  }
}
