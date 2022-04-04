console.clear()

function nonMutatingSlice(cities) {
  const copyArr = [...cities]
  return copyArr.slice(0, 3)
}

const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin']
nonMutatingSlice(inputCities)
console.log(nonMutatingSlice(inputCities))
