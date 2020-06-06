const dollarToRs = (dollar) => {
    if (typeof dollar === 'number')
        return dollar*75
    else
        throw Error('Amount needs to be in number!')
}

try {
    console.log(dollarToRs('100'))
} catch (error) {
    console.log(error)
}

console.log('I am still running')