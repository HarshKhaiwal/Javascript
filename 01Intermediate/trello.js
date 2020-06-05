// const days = ['Mon','Tue','Wed','Thr','Fri','Sat']
// // console.log(days[0])
// // let sayHello = function(){
// //     console.log("Hello")
// // }
// // days.forEach(sayHello)
// // days.forEach(function(){
// //     console.log("Hello")
// // })
// // days.forEach(function(day){
// //     console.log(day)
// // })
// // days.forEach(function(day,index){
// //     console.log(`starts with ${index+1} -- ${day}`)
// // })
// // for(var index = 0; index<days.length;index++){
// //     // const elemwnt = days[index]
// //     // console.log(elemwnt+index)
// //     console.log(days[index])
// // }
// for(var index = days.length-1; index>=0;index--){
//     // const elemwnt = days[index]
//     // console.log(elemwnt+index)
//     console.log(days[index])
// }
// console.log(index)

const myTodos = []
myTodos.push('Buy Eggs')
myTodos.push('Make videos')
myTodos.push('go to market')

// myTodos.forEach(function(todo,i){
//     console.log(`Your task no. ${i+1} is : ${todo}`)
// })
for(i=myTodos.length;i>0;i--){
    console.log(`Your task no. ${myTodos.length-i+1} is : ${myTodos[i-1]}`)
}













