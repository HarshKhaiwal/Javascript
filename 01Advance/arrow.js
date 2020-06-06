// const sayhello = function(name){
//     return 'Hey there, '+name+ ' !'
// }
// console.log(sayhello('harsh'))
const sayhello = (name) => `Hey there, ${name} !`
console.log(sayhello('harsh'))

const todos =[{
    title: 'Buy Bread',
    isDone: true
},{
    title: 'Gym',
    isDone: false
},{
    title: 'Complete JS',
    isDone: true
}]

const thingsDone = todos.filter((todo)=> todo.isDone === true)

console.log(thingsDone)