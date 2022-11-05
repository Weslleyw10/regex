const string = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(string.match(/[a-z]/g))
console.log(string.match(/[b-d]/g))
console.log(string.match(/[2-4]/g))
console.log(string.match(/[A-F1-3]/gi))

