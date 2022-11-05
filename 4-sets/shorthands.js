
const string = '1,2,3,4,5,6,a.b c!d? - f_g'

console.log(string.match(/\d/g)) // numbers [0-9]
console.log(string.match(/\D/g)) // not numbers [^0-9]

console.log(string.match(/\w/g)) // characters [a-zA-Z0-9]
console.log(string.match(/\W/g)) // not characters [^a-zA-Z0-9]

console.log(string.match(/\s/g)) // spaces [\t\n\r\f]
console.log(string.match(/\S/g)) // spaces [^\t\n\r\f]



