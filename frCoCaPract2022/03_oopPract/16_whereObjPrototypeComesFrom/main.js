console.clear()

function Bird(name) {
  this.name = name
}

let duck = new Bird('Donald')

console.log(Bird.prototype.isPrototypeOf(duck))

function Dog(name) {
  this.name = name
}

let beagle = new Dog('Snoopy')

Dog.prototype.isPrototypeOf(beagle)

console.log(Dog.prototype.isPrototypeOf(beagle))
