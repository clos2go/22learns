console.clear()

// EXAMPLE

function Bird(name, color) {
  this.name = name
  this.color = color
  this.numLegs = 2
}

let swan = new Bird('Carlos', 'white')
swan.name = 'Carlos'
swan.color = 'magenta'
console.log(swan)

function Dog(name, color) {
  this.name = name
  this.color = color
  this.numLegs = 4
}

let terrier = new Dog('Charlie', 'black')

console.log(terrier)
