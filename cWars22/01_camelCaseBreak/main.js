console.clear()

//Complete the function so that it breaks up a camel casing, using space between words.

// Return:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// //split().join() SOLUTION
// function camelCaseBreak(string) {
//   return string.split(/(?=[A-Z])/).join(' ')
// }

// //using replace()
// function camelCaseBreak(string) {
//   return string.replace(/([A-Z])/g, ' $1')
// }

function camelCaseBreak(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

console.log(camelCaseBreak('camelCasing'))

//POSSIBLE TESTS
//==> 'government Go Case Take'
//==> 'adjectives Young Good Use'
//==> 'point Public'
//==> 'case Go Go Same'
//==> 'early Time Last Have'
//==> 'come Way Public Little'
//==> 'good Child Problem'
//==> 'find Verbs Number Own'
//==> 'public'
//==> 'do'
//==> 'last Great See Good'
//==> 'early Bad Use Big'
//==> 'group Large Year Other'
//==> 'take'
//==> 'look'
//==> 'different'
//==> 'different Same Take Work'
//==> 'big Way Week Think'
