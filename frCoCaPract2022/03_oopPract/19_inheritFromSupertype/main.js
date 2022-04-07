console.clear()

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log(`nom nom nom`)
  }
}

// let animal = new Animal() <----disadvantages. use this below
// let animal = Object.create(Animal.prototype)

let duck = Object.create(Animal.prototype)
let beagle = Object.create(Animal.prototype)

console.log(duck.eat())
console.log(duck instanceof Animal)
console.log(beagle.eat())
console.log(beagle instanceof Animal)
