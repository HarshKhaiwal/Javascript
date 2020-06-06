var john = {
    name: 'I am Harsh',
    age: 20,
    isActive: true
}

var rohit = {
    name: 'I am Rohit',
    age: 19,
    isActive: false
}

var vertika = {
    name: 'I am Vertika',
    age: 18,
    isActive: true
}

let users = new Map()
// console.log(typeof users)
users.set('john', john)
users.set('rohit', rohit)
users.set('vertika', vertika)

// console.log(users)
// console.log(users.size)
// console.log(users.get('rohit'))
// console.log(users.keys())
// console.log(users.values())

// for (const key of users.keys()) {
//     console.log(key)
// }
// for (const values of users.values()) {
//     console.log(values.age)
// }

for (const [key, value] of users.entries()) {
    console.log(key+' = '+value.age)
}

users.forEach((value,key) => console.log(key+' = '+value.age))
// users.forEach((key,value) => console.log(key+' = '+value.age))    this is wrong value will always come first than key


var arrofArr =[['one','1'],['two','2'],['three','3']]

var newMap = new Map(arrofArr)
console.log(newMap)