//Check for the presence of an element with indexOf()

console.clear()

function quickCheck(arr, element) {
  if (arr.indexOf(element) !== -1) {
    return true
  } else {
    return false
  }
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms")) // should return false
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms")) // should return false
console.log(quickCheck(["onions", "squash", "shallots"], "onions")) // should return true
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125)) // should return true
console.log(quickCheck([true, false, false], undefined)) //should return false
