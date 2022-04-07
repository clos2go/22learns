console.clear()
//DUCK ############
function Bird(name) {
  this.name = name
}
Bird.prototype.numLegs = 2
let duck = new Bird('Donald')

//DOG#############
function Dog(name) {
  this.name = name
}
Dog.prototype.numLegs = 4
let beagle = new Dog('Alf')

//adding proptypes individually

Bird.prototype.eat = function () {
  console.log(`nom nom nom`)
}

Bird.prototype.describe = function () {
  console.log(`My name is ${this.name}`)
}

//adding prototypes as an opject

Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log('nom nom nom')
  },
  describe: function () {
    console.log(`my name is ${this.name}`)
  }
}

//Adding prototypes to dogs
Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log(`chow chow chow`)
  },
  describe: function () {
    console.log(`My name is ${this.name}`)
  }
}
