let a =13.123456789
let b =2.123
let n =5

let a1 =Math.round(a % 1 * Math.pow(10, n))
let b1 =Math.round(b % 1 * Math.pow(10, n))

console.log( a1, b1)
console.log(a1===b1)
console.log(a1>b1)
console.log(a1<b1)
console.log(a1>=b1)
console.log(a1<=b1)
console.log(a1!=b1)