console.clear()

const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male'
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female'
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male'
  }
]

//***MAP***
//1. Get array of all names

//2. Get array of all heights

//3. Get array of objects with just name and height properties

//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)
console.log(`Total Mass of all Characters: \n`, totalMass)

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
console.log(`Total Height of all characters: \n`, totalHeight)

//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color
  if (acc[color]) {
    acc[color]++
  } else {
    acc[color] = 1
  }
  return acc
}, {})
console.log(`All Characters Grouped by eye color: \n`, charactersByEyeColor)
//4. Get total number of characters in all the character names
const totalNameChars = characters.reduce((acc, cur) => {
  return acc + cur.name.length
}, 0)
console.log(
  `Total chars in names of characters grouped by eyecolor: \n`,
  totalNameChars
)
//5. Get total chars of names of Characters grouped by eyecolor

//***FILTER***
//1. Get characters with mass greater than 100

// console.log(mass100plus)

//2. with height less than 200

// console.log(shortCharacters)
//3. Get all male characters

// console.log(males)

//4. Get all female characters

// console.log(females)

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
