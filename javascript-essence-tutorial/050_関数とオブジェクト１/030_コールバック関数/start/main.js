function hello(name) {
  console.log('hello' + name)
}

function bye() {
  console.log('bye')
}

function fn(cd) {
  cd('Tom')
}

fn(hello)
fn(bye)
fn(function () {
  console.log('hello' + name)
})

setTimeout(hello, 2000)
