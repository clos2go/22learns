console.clear()

// function glideMixin(obj) {
//   obj.glide = function () {
//     console.log('Gliding on the water')
//   }
// }

// function flyMixin(obj) {
//   obj.fly = function () {
//     console.log('Fliying, woosh!')
//   }
// }
// let plane = {
//   name: '777',
//   numLegs: 2
// }

// let bird = {
//   name: 'Donald',
//   numLegs: 2
// }

// let duck = new Bird()
// let beagle = new Dog()

// let motionModule = (function () {
//   return {
//     glideMixin: function (obj) {
//       obj.glide = function () {
//         console.log('Gliding on the water')
//       }
//     },
//     flyMixin: function (obj) {
//       obj.fly = function () {
//         console.log('Flying, wooosh!')
//       }
//     }
//   }
// })()

// motionModule.glideMixin(duck)
// duck.glide

let isCuteMixin = function (obj) {
  obj.isCute = function () {
    return true
  }
}
let singMixin = function (obj) {
  obj.sing = function () {
    console.log('Singing to an awesome tune')
  }
}

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function (obj) {
        return true
      }
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log(`Singing to an awesome tune`)
      }
    }
  }
})()
