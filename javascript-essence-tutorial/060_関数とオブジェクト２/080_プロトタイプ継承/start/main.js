function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.hello = function () {
  console.log('hello ' + this.name)
}

function Japanese(name, age, gender) {
  Person.call(this, name, age)
  this.gender = gender
}

Japanese.prototype = Object.create(Person.Prototype)

Japanese.prototype.hello = function () {
  console.log('konnichiwa ' + this.name)
}

Japanese.prototype.bye = function () {
  console.log('sayonara ' + this.name)
}

const taro = new Japanese('Taro', 23, 'Male')
console.log(taro)

taro.hello()
taro.bye()
