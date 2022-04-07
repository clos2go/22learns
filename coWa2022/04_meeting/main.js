console.clear()
//https://www.codewars.com/kata/59df2f8f08c6cec835000012/solutions/javascript

const s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
const list2 =
  'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'

const list3 =
  'John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell'

const list4 =
  'Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern'

// //My Submission
// // --
// const meeting = function (list) {
//   let listArr = list.toUpperCase().split(';')
//   let lastNameFirst = []
//   for (let i = 0; i < listArr.length; i++) {
//     let fullName = listArr[i].replace(':', ' ').split(' ')
//     let firstName = fullName[0]
//     let lastName = fullName[fullName.length - 1]
//     lastNameFirst.push(`(${lastName}, ${firstName})`)
//   }
//   let finalSort = lastNameFirst.sort().join('')
//   return finalSort
// }

function meeting(s) {
  let string = s
    .toUpperCase()
    .split(';')
    .map((x) => x.split(':').reverse().join(', '))
    .sort()
    .join(')(')
  return '(' + string + ')'
}

function meeting(s) {}

// console.log(meeting(s))
//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

console.log(meeting(list2))
//"(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
// console.log(meeting(list3))
//"(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
// console.log(meeting(list4))
//"(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");
