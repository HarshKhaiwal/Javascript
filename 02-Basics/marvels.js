// //Array

// const superHeroes = ['naruto','kakashi','saska','itachi']
// console.log(superHeroes)
// console.log(superHeroes.length)
// console.log(superHeroes[superHeroes.length-1])
// console.log(`We have ${superHeroes.length} super Heroes`)

const numbers = ['one','two','three','four','five']

// numbers[1]='Something'
// console.log(numbers)

console.log(numbers.shift())
console.log(numbers)
console.log(numbers.length)
numbers.unshift('hey')
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.push('six')
console.log(numbers)
numbers.splice(1,1,'anything')
console.log(numbers)