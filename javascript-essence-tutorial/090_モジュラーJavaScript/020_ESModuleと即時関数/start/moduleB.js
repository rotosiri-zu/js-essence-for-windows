import { publicFn as fn, publicval as val } from './moduleA.js'
fn()
fn()
fn()
console.log(val.prop++)
console.log(val.prop++)
fn()
