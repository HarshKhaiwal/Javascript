let iAmGlobal = 'someValue'
if(true){
    let iamLocal ='someMoreValue'
    console.log(iamLocal)
    iAmGlobal='Ryuk'
    console.log(iAmGlobal)
}
console.log(iAmGlobal)
