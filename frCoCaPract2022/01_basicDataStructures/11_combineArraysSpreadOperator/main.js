//Combine arrays using spread and join to create a string sentence

console.clear()

function spreadOut() {
  let fragment = ["to", "code"]
  let sentence = ["learning", ...fragment, "is", "fun"]
  return sentence.join(" ")
}

console.log(spreadOut())
