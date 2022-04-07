console.clear()

let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursela', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

//Regular for loop
let dogs = []
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i])
  }
}
console.log(`Get dogs using for loop: `, dogs)

//Same but using filter and function for dog check

const isDog = function (animal) {
  return animal.species === 'dog'
}

const dogsFilter = animals.filter(isDog)
console.log(`Get dogs using filter: `, dogsFilter)

// const notDogs = animals.reject(isDog)
// console.log(`List of not Dogs: `, notDogs)
