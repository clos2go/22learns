console.clear()

//DUCK ############
function Bird(name) {
  this.name = name
}
Bird.prototype.numLegs = 2
let duck = new Bird()

//DOG#############
function Dog(name) {
  this.name = name
}
Dog.prototype.numLegs = 4
let beagle = new Dog()

console.log(duck.constructor === Bird)
console.log(beagle.constructor === Dog)

// //find out if object is a Bird

// function joinBirdFraternity(candidate) {
//   if (candidate.constructor === Bird) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(joinBirdFraternity())

//Find out if obj is a Dog

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true
  } else {
    return false
  }
}

console.log(joinDogFraternity(beagle))
