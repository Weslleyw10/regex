const string = '<div>Conteúdo 01</div><div>Conteúdo 02</div>'


// greedy
console.log(string.match(/<div>.+<\/div>/g))
console.log(string.match(/<div>.*<\/div>/g))
console.log(string.match(/<div>.{0,100}<\/div>/g))


// ungreedy
console.log(string.match(/<div>.+?<\/div>/g))
console.log(string.match(/<div>.*?<\/div>/g))
console.log(string.match(/<div>.{0,100}?<\/div>/g))


