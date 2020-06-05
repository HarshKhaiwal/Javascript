let myTodos = {
    day: 'Monday',
    meetings:0,
    meetingsDone:0,

    addMeeting: function(num){
        // console.log('Hey, I am a function')
        // console.log(this)
        this.meetings+=num
        // console.log(this)
    },
    summary: function(){
        return `You have ${this.meetings} meetings today`

    },
    meetingDone: function(num2){
        this.meetingsDone+=num2
        console.log(this)
    }
}
let myTodos2 = {
    day: 'Tuesday',
    meetings:2,
    meetingsDone:1,

    addMeeting: function(){
        // console.log('Hey, I am a function')
        console.log(this)
    }
}

myTodos.addMeeting(2)
myTodos2.addMeeting()
console.log(myTodos.summary())
myTodos.meetingDone(2)