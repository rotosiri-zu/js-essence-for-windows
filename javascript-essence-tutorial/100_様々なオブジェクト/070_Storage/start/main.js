const obj = { a: 0 }
const json = JSON.stringify(obj)
localStorage.setItem('key', '1')
localStorage.setItem('key2', '1')
const result = localStorage.getItem('key')
const obj2 = JSON.parse(result)
console.log(result)
console.log('end')
