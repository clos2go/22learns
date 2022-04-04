console.clear()
function copyMachine(arr, num) {
  let newArr = []
  while (num >= 1) {
    //Using spread (...) and push to newArr
    newArr.push([...arr])
    num--
  }
  return newArr
}

console.log(copyMachine([true, false, true], 2))
