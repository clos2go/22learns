console.clear()

function sentensify(str) {
  return str.split(/\W/).join(' ')
}

console.log(sentensify('May-the-force-be-with-you')) //should return the string May the force be with you.
console.log(sentensify('The.force.is.strong.with.this.one')) //should return the string The force is strong with this one.
console.log(sentensify('There,has,been,an,awakening')) //should return the string There has been an awakening
