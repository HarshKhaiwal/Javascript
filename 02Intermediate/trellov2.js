let myTodos = {
    day: 'Monday',
    meetings:0,
    meetingsDone:0,
}

let addMeeting = function(todo,meet=0){
    // todo.meetings = todo.meetings+meet
    todo.meetings += meet
}

addMeeting(myTodos,3)
console.log(myTodos.meetings)
addMeeting(myTodos,6)
let meetDone = function(todo,meetDone=0){
    todo.meetingsDone -=meetDone
}
meetDone(myTodos,2)
console.log(myTodos.meetingsDone)

let resetDay = function(todo){
    todo.meetings=0,
    todo.meetingsDone=0
}

let getSummary = function(todo){
    let meetLeft = todo.meetings+todo.meetingsDone
    return `You have ${meetLeft} no. of meetings today!`
}
console.log(getSummary(myTodos))