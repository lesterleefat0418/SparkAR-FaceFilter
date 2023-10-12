// Original post was created by Josh Beckwith
// URL: https://www.facebook.com/groups/SparkARcommunity/permalink/683989935346385/
//

const Scene = require('Scene')
const Reactive = require('Reactive')
const Animation = require('Animation')
const {log} = require('Diagnostics')
const names = ["emitter0", "emitter1"];

for (let i = 0; i < names.length; i++) {
  Scene.root.findFirst(names[i]).then(emitter => {
    const fadeIn = Animation.samplers.HSVA([
      Animation.samplers.constant(1),
      Animation.samplers.constant(1),
      Animation.samplers.constant(1),
      Animation.samplers.linear(0, 1),
    ])
    const fadeOut = Animation.samplers.HSVA([
      Animation.samplers.constant(1),
      Animation.samplers.constant(1),
      Animation.samplers.constant(1),
      Animation.samplers.polyline({keyframes: [0, 1, 1, 1, 0]})
    ])
    // log(emitter)
    emitter.colorModulationHSVA = Reactive.HSVA(Reactive.val(0), Reactive.val(0), Reactive.val(80), Reactive.val(0))
    emitter.hsvaColorModulationModifier = fadeOut
    // Animation.samplers.sequence([fadeIn, fadeOut])
  })
}
