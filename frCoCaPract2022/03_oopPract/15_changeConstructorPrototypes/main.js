console.clear()

//DUCK ############
function Bird(name) {
  this.name = name
}
let duck = new Bird('Donald')

//adding prototypes as an opject

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log('nom nom nom')
  },
  describe: function () {
    console.log(`my name is ${this.name}`)
  }
}

//DOG#############
function Dog(name) {
  this.name = name
}
let beagle = new Dog('Alf')

//Adding prototypes to dogs
Dog.prototype = {
  constructor: Dog, //Added constructor
  numLegs: 4,
  eat: function () {
    console.log(`chow chow chow`)
  },
  describe: function () {
    console.log(`My name is ${this.name}`)
  }
}

console.log(duck.constructor === Bird)
console.log(duck.constructor === Object)
console.log(duck instanceof Bird)

console.log(beagle.constructor === Dog)
console.log(beagle.constructor === Object)
console.log(beagle instanceof Dog)
