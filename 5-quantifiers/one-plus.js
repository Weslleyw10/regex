const string = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO!!'
const string2 = 'There is a big fog in NYC'
const string3 = 'The numbers are: 0123456789'

console.log(string.match(/fogo+/gi))
console.log(string2.match(/fogo+/gi))

console.log(string3.match(/[0-9]/gi))
console.log(string3.match(/[0-9]+/gi))
console.log(string3.match(/\d+/gi))


