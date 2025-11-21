const prompt = require("prompt-sync")();
let addToHistory = [];

const showOperator={
    addition:"+",
    subtraction:"-",
    multiplication:"*",
    division:"/",
    power:"^",
    squareroot:"square",
    factoriel:"!"
}

function addition(){
    let somme = number1 + number2;
    console.log(number1,"+",number2 ,"=",somme);
    addToHistory.push([number1,operator,number2,"=",somme]);
    
}

function soustraction(){
    let sous = number1 - number2;
    console.log(number1,"-",number2 ,"=",sous);
    addToHistory.push([number1,operator,number2,"=",sous]);
    
}

function multiplication(){
    let multi = number1 * number2;
    console.log(number1,"*",number2 ,"=",multi);
    addToHistory.push([number1,operator,number2,"=",multi]);
    
}

function division(){
    if (!number2){
        console.log("Syntax Error")
    }else {
        let div = number1 / number2;
        console.log(number1,"/",number2 ,"=",div);
        addToHistory.push([number1,operator,number2,"=",div]);
        
    }

}

function puissance(){
    let puis = Math.pow(number1,number2);
    console.log(number1,"^",number2 ,"=",puis);
    addToHistory.push([number1,operator,number2,"=",puis]);
    

}

function racineCarre(){
    let square = Math.sqrt(number1);
    console.log("sqaure root of ", number1,"=",square);
    addToHistory.push([number1,operator,"=",square]);
    
}

function factorielle(){
    if (number1 < 0){
        console.log("syntax Error");
    }else if(number1 === 0 ){
        console.log("factotiel of 0 = ",1);
        addToHistory.push([number1,operator,"=",facto]);
    }else{
        let facto = 1
        for(let i = 1 ; i <= number1 ; i++){
            facto *= i;
        }
        console.log(number1,"! = ",facto);
        addToHistory.push([number1,operator,"=",facto]);
        
    }
}
function showHistory(){
    console.log(addToHistory)
}

for(;;){
console.log("**********MENU**********");
console.log("* enter 1 to calcule : *");
console.log("* enter 2 to quit    : *");
console.log("* enter 3 to history : *");
console.log("************************");
let choice = Number(prompt("enter number : "))
if(choice === 2 ){
    break;
}else if (choice === 1 ){
    for(;;){
        var number1 = Number(prompt("enter the first number : "));
        console.table(showOperator);
        var operator = prompt("enter the operator : ");
        if (["square","!"].includes(operator) ){
            console.log("only one number");
        }else if (["+","-","*","/","^"].includes(operator)) {
            var number2 = Number(prompt("enter the second number : "));
        }else {
            console.log("this operator doesn't exist")
        }
        switch(operator){
            case "+": addition() 
                break;
            case "-": soustraction()
                break;
            case "*": multiplication()
                break;
            case "/": division()
                break;
            case "^": puissance()
                break;
            case "square": racineCarre()
                break;
            case "!": factorielle()
                break;
        }
        break;
        }
}else if (choice === 3){
    showHistory()
}else {
    console.log("follow the menu")
}
}

