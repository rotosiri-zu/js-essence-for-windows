const wm = new WakeMap()

let o = {}
wm.set(o, 'value1')

// o = null
// o = {}
console.log(wm.delete(o))
console.log(wm.get(o))
