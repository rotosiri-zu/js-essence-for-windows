function hello(name) {
  name = name || 'Tom'
  console.log('hell' + name)
}

hello()

let name = 'Bob'

name && hello(name)
