console.clear()

// // EXAMPLE
// function Bird(name) {
//   this.name = name
// }

// let duck = new Bird('Donald')
// let canary = new Bird('Tweety')

// let ownProps = []

// for (let property in duck) {
//   if (duck.hasOwnProperty(property)) {
//     ownProps.push(property)
//   }
// }

// console.log(ownProps)

// Bird.prototype.numLegs = 2

// console.log(duck.numLegs)
// console.log(canary.numLegs)

function Dog(name) {
  this.name = name
}

Dog.prototype.numLegs = 4

let beagle = new Dog('Snoopy')

console.log(beagle.numLegs)
