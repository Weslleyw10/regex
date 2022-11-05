

const string = 'a   b'
console.log(string.match(/a   b/))
console.log(string.match(/a\s\s\sb/))

console.log(string.match(/a\s+b/))
console.log(string.match(/a {3}b/))
console.log(string.match(/a\s{3}b/))