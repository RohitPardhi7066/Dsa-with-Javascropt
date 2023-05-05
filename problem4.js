const prompt = require("prompt-sync")()

 
 function numbers(num1,num2){
    a = num1
    num1 = num2
    num2 = a
    console.log("num1 is a", num1);
    console.log("num2 is a", num2);
}

num1 = prompt("Enter num1 number, ")
num2 = prompt("Enter num2 num, ")

numbers(num1,num2);