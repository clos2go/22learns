console.clear()

function Bird(name) {
  this.name = name
}

typeof Bird.prototype
console.log(typeof Bird.prototype)

Object.prototype.isPrototypeOf(Bird.prototype)
console.log(Object.prototype.isPrototypeOf(Bird.prototype))

function Dog(name) {
  this.name = name
}

let beagle = new Dog('Snoopy')

Dog.prototype.isPrototypeOf(beagle)
console.log(Dog.prototype.isPrototypeOf(beagle))

Object.prototype.isPrototypeOf(Dog.prototype)
console.log(Object.prototype.isPrototypeOf(Dog.prototype))

//How is this useful?
beagle.hasOwnProperty('name')
console.log(beagle.hasOwnProperty('name'))
