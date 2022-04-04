console.clear()

//Bird and Plane mixin EXAMPLE
let flyMixin = function (obj) {
  obj.fly = function () {
    console.log(`Flying, wooosh!`)
  }
}

let plane = {
  name: '777',
  numLegs: 2
}

let bird = {
  name: 'Donald',
  numLegs: 2
}

flyMixin(bird)
flyMixin(plane)

console.log(bird.fly())
console.log(plane.fly())

let boat = {
  name: 'Warrior',
  type: 'race-boat'
}

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log(`Look, I'm gliding!`)
  }
}

glideMixin(bird)
glideMixin(boat)

console.log(bird.glide())
console.log(boat.glide())
