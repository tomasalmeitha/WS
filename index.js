/*const prompt=require("prompt-sync")({sigint:true}); 


const num1 = Number(prompt("Insert a number: "));
const num2 = Number(prompt("Insert a number: "));
const sum = num1 + num2;

console.log(sum);*/

/*const prompt = require("prompt-sync")({sigint: true});

const num = Number(prompt("Insert a number: "));


for (let i = 0; i <=10; i++){
    let num2 = num * i;
    console.log(num2);
}*/


const prompt = require("prompt-sync")({sigint: true});


const num = Number(prompt("Insert a number: "));
let i = 0;

do {
    
    let num2 = num * i;
    i++;
    console.log(num2);


} while (i <= 10);

    