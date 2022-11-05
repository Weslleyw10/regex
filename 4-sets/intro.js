const string = '1,2,3,4,5,6,a.b c!d?e[f'

const regex = /[0246]/g
console.log(string.match(regex));

const string2 = 'João não vai passear na moto.'
const regexString2 = /n[aã]/g
console.log(string2.match(regexString2));
