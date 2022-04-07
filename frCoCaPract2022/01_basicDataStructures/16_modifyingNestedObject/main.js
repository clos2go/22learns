console.clear()

// Modify an Object Nested Within an Object
// Now let's take a look at a slightly more complex object.
// Object properties can be nested to an arbitrary depth,
// and their values can be any type of data supported by JavaScript,
// including arrays and even other objects. Consider the following:

// // EXAMPLE

// let nestedObject = {
//   id: 28802695164,
//   date: "December 31, 2016",
//   data: {
//     totalUsers: 99,
//     online: 80,
//     onlineStatus: {
//       active: 67,
//       away: 13,
//       busy: 8,
//     },
//   },
// }

// console.log(nestedObject.data.onlineStatus.busy)

// defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
}

userActivity.data.online = 45

console.log(userActivity)
