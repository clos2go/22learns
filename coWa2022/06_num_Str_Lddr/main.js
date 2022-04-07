console.clear()

function pattern(n) {
  let output = ''
  let stars = ''
  for (let i = 0; i < n - 1; i++) {
    if (i === 0) {
      output += `1\n`
      // console.log(output)
    }
    stars += '*'
    output += `1${stars}${i + 2}\n`
    // console.log(output)
  }
  return output
}

console.log(pattern(3))
// 1\n1*2\n1**3'
console.log(pattern(7))
//1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7'
console.log(pattern(20))
// '1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20'
