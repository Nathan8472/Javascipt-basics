import {pi} from"./utils.js";
console.log(pi);

console.log("Hello Sarthak");

let message = "Hello, javascript";
const author = "instructor";
var count = 0;

let age = 18;
if(age >= 18) {
    console.log("You are allowed to drink");
}

else if(age <18){
    console.log("Tough Luck, You're too young!");
}

console.log("But you have to...");

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Get up for work");
        break;
    case "Sunday":
        console.log("Chill!");
        break;
    default:
        console.log("Just another crap day");
}

const button = document.getElementById("clickButton");
const nameInput = document.getElementById("InputText");
const button2 = document.getElementById("GreetButton");
const output = document.getElementById("output");

GreetButton.addEventListener ("click", () =>{
    let name = nameInput.value;
    if (name){
        output.innerText = `Hello, ${name}!`;
    }
    else{
        output.innerText = "Please Enter Your Name";
    }
})