let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

let firstPlayerChoice = "paper";
let secondPlayerChoice = "rock";

let firstPossibility = (firstPlayerChoice === rock && secondPlayerChoice === paper);
let secondPossibility = (firstPlayerChoice === paper && secondPlayerChoice === rock);
let thirdPossibility = (firstPlayerChoice === paper && secondPlayerChoice === rock);

let fourthPossibility = (firstPlayerChoice === paper && secondPlayerChoice === rock);
let fifthPossibility = (firstPlayerChoice === scissors && secondPlayerChoice === paper);
let sixthPossibility=(firstPlayerChoice === rock && secondPlayerChoice === paper);

let seventhPossibility = (firstPlayerChoice === secondPlayerChoice);

if (firstPossibility || secondPossibility || thirdPossibility){
    console.log("first player won!");
}

else if (fourthPossibility || fifthPossibility || sixthPossibility){
    console.log("second player won!");
}

else if(seventhPossibility){
    console.log("It's a tie!");
}
else{
    console.log("Some thing went wrong");
}
