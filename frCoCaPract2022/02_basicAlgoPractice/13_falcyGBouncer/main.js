console.clear()

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

//cheking for truth to ignore falsy
// function bouncer(arr) {
//   let truthyArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) truthyArr.push(arr[i])
//   }
//   return truthyArr
// }

//filter(boolean)
function bouncer(arr) {
  return arr.filter(Boolean)
}

console.log(bouncer([7, 'ate', '', false, 9])) // should return [7, "ate", 9].
console.log(bouncer(['a', 'b', 'c'])) //should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ''])) //should return [].
console.log(bouncer([null, NaN, 1, 2, undefined])) //should return [1, 2]
