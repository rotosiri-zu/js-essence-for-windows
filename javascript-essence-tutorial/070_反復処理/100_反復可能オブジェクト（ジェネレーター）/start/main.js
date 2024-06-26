const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
}

Object.prototype[Symbol.iterator] = function* () {
  for (let key in this) {
    yield [key, this[key]]
  }
}

for (let [k, v] of items) {
  console.log(k, v)
}
