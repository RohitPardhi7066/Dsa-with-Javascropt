// find the largest number among three numbers
const prompt = require("prompt-sync")()

num1 = parseInt(prompt("Enter a num1, "))
num2 = parseInt(prompt("Enter a num2, "))
num3 = parseInt(prompt("Enter a num3, "))


if (num1 >= num2 && num1 >= num3) {
  console.log(num1," is The largest");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2," is The largest");
} else {
  console.log(num3," is The largest");
}
