const string = '.$+*?-'

console.log(string.match(/[+.?*$]./g))
console.log(string.match(/[$-?]/g))

console.log(string.match(/[$\-?]/g))
console.log(string.match(/[-?]/g))