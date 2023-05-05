// find the square root of a given number

const prompt = require('prompt-sync')()
let num = parseInt(prompt("Enter a number, "))

function SquarRootof(num){
    squareroot = num * num
    return squareroot
}

a = SquarRootof(num);
console.log(`the square root of ${num} is ${a}`)