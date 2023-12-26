/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0
let val2 = val
val2 = 1

// let val = 0
// let vel2 = vel
// vel2 = 1 vel2 = vel = 0 , 1

// console.log(val); // 問題１

let obj = {
  prop1: 10,
}
const obj2 = obj
obj2.prop1 = 9

// obj = prop1: 10
// obj2 = obj = prop1: 10
// obj2 → obj = prop1:10 → 上書きprop1:9
// console.log(obj); // 問題２

function fn1(arg) {
  arg.prop2 = 8
  return arg
}
let obj3 = fn1(obj2)

// 関数fn1に引数argを代入、変数arg.prop2に8を代入
// リターンで引数argに変数arg.prop2を代入
// 変数obj3に関数fn1引数に変数obj2を代入
// 変数obj2の中にあるobjにprop2が追加される
// console.log(obj); // 問題３

function fn2(arg) {
  arg = {}
  return arg
}
const obj4 = fn2(obj) // 問題４
// 関数fn2に引数argを代入、変数argに配列を代入
// リターンで引数argに変数arg.配列を代入
//  変数obj4に関数fn2引数に変数objを代入
// まとめ 元のobjには prop1:9 追加prop2: 8 追加 新しいオブジェクト参照先が入っている
// console.log(obj); // 問題４
