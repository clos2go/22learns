console.clear()

const orders = [
  { id: 'daimond', total: 11.0 },
  { id: 'brick', total: 23.0 },
  { id: 'vase', total: 7.0 }
]

const totalCost = orders.reduce((finalCost, item) => finalCost + item.total, 0)

console.log(`Total Cost: `, totalCost)

//ReduceRight to work from right to left

console.log(`\nUsing reduceRight() to iterate in right to left`)
const totalRight = orders.reduceRight((finalCost, item, index) => {
  console.log(`index: ${index}: `, item.total)
  return finalCost + item.total
}, 0)
