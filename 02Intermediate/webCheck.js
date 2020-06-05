let userEmail = 'LCo1234'
let password = '1234@12'
// console.log(password.length)
// console.log(userEmail.toLowerCase())
// console.log(userEmail.toUpperCase())
// let name = '   Harsh Khaiwal  '
// console.log(name.trim())

let userChecker = function(myStr){
    if ((myStr.includes(123)) && (myStr.length > 6)){
        return true
    }
    else{
        return false                 //this part is optional
    }
}

// console.log(userChecker(userEmail))

let passChecker = function(myPass){
    if ((myPass.includes(123)) && (myPass.length > 6)&&(myPass.includes('@'))){
        return true
    }
    else{
        return false                 //this part is optional
    }
}
console.log(passChecker(password))

