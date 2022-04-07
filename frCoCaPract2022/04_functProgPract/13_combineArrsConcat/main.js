console.clear()

function nonMutatingConcat(original, attach) {
  const concatArr = original.concat(attach)
  return concatArr
}

const first = [1, 2, 3]
const second = [4, 5]
nonMutatingConcat(first, second)
console.log(nonMutatingConcat(first, second))
