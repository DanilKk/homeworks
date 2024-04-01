//task 1

const num1 = 5
const result1 = (num1 > 0) ? num1*-1 : (num1 === 0) ? 0 : num1;
console.log(result1);

//task 5

let signal = "красный";
const period = 12;
let counterYellow = 1

function determineColorNumber(str2){
    clrNmbr = (str2 === "красный") ? 1 : (str2 === "желтый") ? 2 * counterYellow : 3;
    return clrNmbr;
}

function determineSequence (str22, num2){
    let ColorNumber = determineColorNumber(str22);
    let string = "";
    while (num2>0) {
         let newStr = ((ColorNumber+1)%4 === 1) ? "красный" : ((ColorNumber+1)%4 === 3) ? "зеленый" : "желтый";
         string = string + " " + newStr;
         ColorNumber = determineColorNumber(newStr);
         num2 -=1;
         counterYellow = (newStr === "желтый" && counterYellow === 1) ? counterYellow +1 : (newStr === "желтый" && counterYellow === 2) ? counterYellow - 1 : counterYellow;
    }
    return string;
}

console.log(determineSequence(signal, period))

//task 2

function rockPaperScissors(player1, player2) {
    const result = (player1 === player2) ? "Draw!" : (player1 === "rock" && player2 === "paper") ? "Player 2 won!" : (player1 === "rock" && player2 === "scissors") ? "Player 1 won!" : (player1 === "paper" && player2 === "rock") ? "Player 1 won!" : (player1 === "scissors" && player2 === "rock") ? "Player 2 won!" : (player1 === "scissors" && player2 === "paper") ? "Player 1 won!" : (player1 === "paper" && player2 === "scissors") ? "Player 2 won!" : "unknown sign";
    return result;
}

console.log(rockPaperScissors("car", "paper"));

//task 3

const arrayNumb = [-1, -4.2, -2, -5, -3, -10, -3.3, -12, -12];

let counter3 = 0;
let str3 = "";

arrayNumb.forEach(element => {
    if (element > 0) {
        str3 = (str3 != "" ) ? str3 + " + " + element : element;
        counter3 += element;
    }
});

if (counter3 > 0) {
    console.log(str3 + " = " + counter3);
}
else{
    console.log(0);
}


//task 4

function countBy(n,m) {
    let array4 = [];
    let counter4 = 1;
    while(n*counter4 <= n*m){
        array4.push(n*counter4);
        counter4 += 1;
    }
    return array4;
}

console.log(countBy(4,11));