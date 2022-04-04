console.clear()

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
}
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;

;["oranges", "plums", "strawberries"].forEach((item) => {
  delete foods[item]
})

console.log(foods)
