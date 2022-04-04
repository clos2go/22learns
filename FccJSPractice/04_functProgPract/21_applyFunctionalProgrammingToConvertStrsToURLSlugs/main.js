console.clear()

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-')
}

//using filter()

function urlSlug(title) {
  return title
    .split(' ')
    .filter((substr) => substr !== '')
    .join('-')
    .toLowerCase()
}

console.log(urlSlug('Winter Is Coming')) //should return the string winter-is-coming.
console.log(urlSlug(' Winter Is  Coming')) //should return the string winter-is-coming.
console.log(urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone')) //should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.
console.log(urlSlug('Hold The Door')) //should return the string hold-the-door
