let sayHello = function(name){
    console.log(`Hello ${name}`)
}
sayHello("Harsh")

let FullNameMaker = function(firstName,lastName){
    console.log(`Hello ${firstName+' '+lastName }`)
}
FullNameMaker("Raman","Roy")

let adder = function(a,b){
    let sum=a+b
    return sum
}
console.log(adder(9,8))

let guestUser = function(name='unName',courseCount=0){
    return 'Hello '+name+' and your course count is '+courseCount
}
console.log(guestUser('Rohan',5))
console.log(guestUser())