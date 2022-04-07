console.clear()

function sliceArrry(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice)
}

const inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant']

sliceArrry(inputAnim, 1, 3)

console.log(sliceArrry(inputAnim, 1, 3))
