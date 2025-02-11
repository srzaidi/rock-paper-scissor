function getComputerChoice(){
    let choice=Math.floor(Math.random()*3)
    if(choice==0)
        return "Rock"
    else if(choice==1)
        return "Paper"
    else
        return "Scissor"
};

function getHumanChoice(){
    number = Number(prompt("Enter your choice: 1 for Rock, 2 for Paper, 3 for Scissor"));
    
    if(number==1)
        return "Rock"
    else if(number==2)
        return "Paper"
    else if(number==3)
        return "Scissor"
    else{
        prompt("Enter valid value: 1 ,2 or 3")
        return getHumanChoice();
    }

};

let humanScore=0
let computerScore=0

function playRound(humanChoice, computerChoice){
    if(humanChoice==computerChoice){
        console.log("It's a tie")
        return;
    }
    else if(humanChoice=="Rock" && computerChoice=="Scissor")
    {
        console.log("You Win! Rock beats Scissor")
        humanScore+=1;
        return;
    }
    else if(humanChoice=="Scissor" && computerChoice=="Paper")
        {
            console.log("You Win! Scissor beats Paper")
            humanScore+=1;
            return;
        }
    else if(humanChoice=="Paper" && computerChoice=="Rock")
        {
            console.log("You Win! Paper beats Rock")
            humanScore+=1;
            return;
        }
    else if(computerChoice=="Rock" && humanChoice=="Scissor")
    {
        console.log("You Lose! Rock beats Scissor")
        computerScore+=1;
        return;
    }
    else if(computerChoice=="Scissor" && humanChoice=="Paper")
        {
            console.log("You Lose! Scissor beats Paper")
            computerScore+=1;
            return;
        }
    else if(computerChoice=="Paper" && humanChoice=="Rock")
        {
            console.log("You Lose! Paper beats Rock")
            computerScore+=1;
            return;
        }    
};

function playGame(){
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You chose ${humanSelection} and Computer chose ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`Current Score: Human: ${humanScore} | Computer: ${computerScore}`);
    }
    if(humanScore>computerScore){
        console.log("You Win the Game")
        return;
    }
    if(computerScore>humanScore){
        console.log("Computer Wins the Game")
        return;
    }
    else
        console.log("Game Tied")
    return;
};

playGame();