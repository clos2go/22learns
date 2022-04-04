console.clear()
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

//split() > for loop > change charAt() to upper to substr() > to lowerCase()
function titleCase(str) {
  let strArr = str.split(' ')
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].charAt(0).toUpperCase() + strArr[i].substr(1).toLowerCase()
  }
  return strArr.join(' ')
}

//// use map() instead of for loop
// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
//     .join(' ')
// }

// //Regex
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase())
// }

console.log(titleCase("I'm a little tea pot")) //should return a string.
console.log(titleCase("I'm a little tea pot")) //should return the string I'm A Little Tea Pot.
console.log(titleCase('sHoRt AnD sToUt')) //should return the string Short And Stout.
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')) //should return the string Here Is My Handle Here Is My Spout
