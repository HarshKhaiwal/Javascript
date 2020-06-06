const ques = [{
    title : 'Modi is PM of India',
    ans: true
},{
    title : 'Kohli is better than Sachin',
    ans: false
},{
    title : "Naruto is the best anime",
    ans: true
},{
    title : 'Covid19 comes from bats',
    ans: true
},{
    title : 'War is going to happen b/w India and China',
    ans: false
},{
    title : 'Japanese is easier to learn',
    ans: false
}]

const quiz = ques.filter((que) => que.ans === false)
quiz.forEach((ques)=> console.log(ques.title))