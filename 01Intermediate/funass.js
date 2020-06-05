let marks = function(cm,tm){
    let percentage = cm/tm*100
    if(percentage>100){
        console.log("Your marks can't be greater than total marks")
        grade='Invalid'
    }
    else if (percentage>90){
        grade = 'A'
    }
    else if(percentage>80){
        grade = 'B'
    }
    else if(percentage>70){
        grade = 'C'
    }
    else if(percentage>60){
        grade = 'D'
    }
    else if(percentage>50){
        grade = 'E'
    }
    else if(percentage<50){
        grade = 'F'
    }
    return `Your grade is ${grade} and percentage ${percentage}`
}
console.log(marks(76,100))