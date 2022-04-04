console.clear()

// The global variable
const s = [23, 65, 98, 5]

Array.prototype.myMap = function (callback) {
  const newArray = []
  // 2 OPTIONS
  //FOR LOOP
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
  }

  // //FOR EACH
  // this.forEach((a) => newArray.push(callback(a)))

  //RECURSION

  // Only change code above this line

  return newArray
}

const new_s = s.myMap(function (item) {
  return item * 2
})

console.log(new_s)
