console.clear()

const items = [
  { name: 'Rice', price: 5 },
  { name: 'Book', price: 20 },
  { name: 'Chicken', price: 10 },
  { name: 'Monitor', price: 100 }
]

// Sum of total Price reduce()

// let totalPrice = 0
// items.forEach((item) => {
//   totalPrice += item.price
// })

let totalPrice = items.reduce((acc, val) => {
  return acc + val.price
}, 0)

console.log(`Sum of All Prices: `, totalPrice)

const people = [
  { name: 'Kyle', age: 26 },
  { name: 'John', age: 31 },
  { name: 'Sally', age: 42 },
  { name: 'Jill', age: 42 }
]

const groupByAge = people.reduce((groupedPeople, person) => {
  const age = person.age
  if (groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
}, {})

console.log(`Grouped People by Age: `, groupByAge)

const numbers = [13, 2, 5]
