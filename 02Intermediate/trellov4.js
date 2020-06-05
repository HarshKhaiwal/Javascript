const myTodos = ['Buy Milk','gym']
// console.log(myTodos.indexOf('Buy Milk'))


const newTodos = [{
    title: 'Buy Center Fresh',
    isDone: false,
}, {
    title: 'Gym',
    isDone: true,
}]
console.log(newTodos.findIndex(function(todos,index){
    console.log(todos)
    return todos.title==='Gym'
}))

const findTodo = function(myTodos,title){
    const index = myTodos.findIndex(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
    return myTodos[index]
}

console.log(findTodo(newTodos,'gym'))
