console.clear()

function Animal() {}
Animal.prototype.eat = function () {
  console.log(`nom nom nom`)
}

function Dog() {}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
  console.log(`Woof!`)
}

let beagle = new Dog()
console.log(beagle.eat())
console.log(beagle.bark())
