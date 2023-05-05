// program to check number is odd or even 
const prompt = require('prompt-sync')();

num = parseInt(prompt('Enter a number, '));


function CheckEvenOrOdd(num){
    a = num%2
    if(a==0){
        console.log(num + " is even number");
    }
    else{
        console.log(num + " odd number");
    }
}

CheckEvenOrOdd(num);

 