
const string = 'Jão recebeu 120 milhões apostando 6 9 21 23 45 46.'

console.log(string.match(/\d{1,2}/g))
console.log(string.match(/\d{2}/g))
console.log(string.match(/\d{1,}/g))

console.log(string.match(/\w{7}/g))
console.log(string.match(/[\wõ]{7,}/g))

