function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++)
      callback(val)
    }, 1000)
  })
}

sleep(0).then(function (val) {
  return sleep(val)
})
