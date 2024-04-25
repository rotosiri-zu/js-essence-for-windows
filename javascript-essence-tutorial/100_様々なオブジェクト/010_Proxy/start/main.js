const targetObj = { a: 0 }
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`)
    // target[prop] = value
    throw new Error('cannot add prop')
  },
  set: function (target, prop, receiver) {
    console.log(receiver)
    if (target.hasOwnProperty(prop)) {
      return target[prop]
    } else {
      return '-1'
    }
    console.log(`[set]: ${prop}`)
    return (target[prop] = value)
  },
  deleteProperty: function (target, prop) {
    console.log(`[set]: ${prop}`)
    delete target[prop]
  },
}
const pxy = new Proxy(targetObj, handler)
// pxy.a = 1
console.log(pxy.b)
pxy.b
delete pxy.a
