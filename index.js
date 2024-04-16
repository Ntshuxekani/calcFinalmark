let prompt=require('prompt-sync')();

for (let i = 0; i < 3; i++) {
    const name = prompt("Enter name: ");

const mark1 = parseFloat (prompt("Enter first mark"));
const mark2 = parseFloat (prompt("Enter second mark"));
const mark3 = parseFloat (prompt("Enter third mark"));

let sum= mark1+ mark2 +mark3;
let avg = sum/3;
let status;


if(avg < 50){
   status = "fail"; 
}else if(avg > 50 && avg<75){
   status = "Pass"; 
}
else if(avg >= 75 && avg<100){
   status = "Pass with distinction";
} 
else if(avg > 100){
    status = "Check your inputs";
}
console.log(`${name}'s final mark is: ${avg} ${status}`);
}




