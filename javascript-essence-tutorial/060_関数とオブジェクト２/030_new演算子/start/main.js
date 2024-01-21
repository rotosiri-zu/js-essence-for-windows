function F(a, b) {
  this.a = a
  this.b = b
  return { a: 1 }
}

F.prototype.c = function () {}

function newOpe(c, ...args) {
  const _this = object.create(c.prototype)
  const result = c.apply(_this, args)
  console.log(typeof result)
  if (typeof result === 'object' && result != null) {
    return result
  }
  return _this
}

const instance = newOpe(F, 1, 2)
// console.log(instance)
