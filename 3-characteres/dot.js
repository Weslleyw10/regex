
const text = '1,2,3,4,5,6,7,8,9,8.1,0.0,10.0'

console.log(text.match(/1.2/g))
console.log(text.match(/1..2/g))
console.log(text.match(/1..,/g))
console.log(text.match(/8../g))
console.log(text.match(/.\../g))





