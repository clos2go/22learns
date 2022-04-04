console.clear()

// Example

let Bird = function (name, color) {
  this.name = name
  this.color = color
  this.numLegs = 2
}

let crow = new Bird('Alexis', 'black')

console.log(crow instanceof Bird)

let House = function House(numBedrooms) {
  this.numBedrooms = numBedrooms
}

let myHouse = new House(5)

console.log(myHouse instanceof House)
