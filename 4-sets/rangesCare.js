const string ='ABC [abc] a-c 1234'

console.log(string.match(/[a-c]/g))
console.log(string.match(/a-c/g))
console.log(string.match(/[A-z]/g))


// Must follow Unicode table
// console.log(string.match(/[a-Z]/g))
// console.log(string.match(/[4-1]/g))

