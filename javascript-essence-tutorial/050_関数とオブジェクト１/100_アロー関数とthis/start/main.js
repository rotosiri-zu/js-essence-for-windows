window.name = 'John'

const person = {
  name: 'Tom',
  hello() {
    console.log('Hello ' + this.name)
  },
}
// person.hello()

function b() {
  const a = () => console.log('Bye' + this.name)
  a()
}

b()
