
const text = '0,1,2,3,4,5,6,7,8,9,10,a,b,c,d,e,f,g';

const stringRegex = RegExp('9')

console.log('Methods of RegExp...')
console.log(stringRegex.test(text))
console.log(stringRegex.exec(text))


const regexLetters = /[a-f]/g
console.log('Methods of string...')
console.log(text.match(regexLetters))
console.log(text.search(regexLetters))
console.log(text.replace(regexLetters, "Finded"))
console.log(text.split(regexLetters))









