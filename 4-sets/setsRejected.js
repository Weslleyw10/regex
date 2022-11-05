const string = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(string.match(/\/D/g))
console.log(string.match(/[^0-9]/g))
console.log(string.match(/[^\d!\?\[\s,\.]/g))


const string2 = '1: !"#$%&\'()*+,-./ 2: :;<==>?@'
console.log(string2.match(/[^!-/:-@\s]/g))

