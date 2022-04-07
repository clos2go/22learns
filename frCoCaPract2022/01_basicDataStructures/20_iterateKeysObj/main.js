console.clear()

// Iterate Through the Keys of an Object with a for...in Statement
// Sometimes you may need to iterate through all the keys within an object. T
// This requires a specific syntax in JavaScript called a for...in statement.
// For our users object, this could look like:

// for (let user in users) {
//   console.log(user);
// }

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
// console.log(users["Alan"].online)

function countOnline(obj) {
  let result = 0
  for (let user in obj) {
    if (obj[user].online === true) {
      result++
    }
  }
  return result
}

console.log(countOnline(users))
