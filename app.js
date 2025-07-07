
const computerSelection= function getComputerChoice(){
const random = Math.random();

if(random>0 && random<=0.33){
  return "rock";
}
else if (random>0.33 &&random<=0.66){
   return "paper";
}
else{
    return "scissors";
}
};



let computerPoint=0; let playerPoint=0;



const rockBtn= document.querySelector("#rockBtn");
rockBtn.addEventListener("click",()=>{
  gameRound(computerSelection(),"rock");
})

const paperBtn= document.querySelector("#paperBtn");
paperBtn.addEventListener("click",()=>{
  gameRound(computerSelection(),"paper");
})

const scissorsBtn= document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click",()=>{
  gameRound(computerSelection(),"scissors");
})



const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
const finalResultDiv = document.querySelector("#finalResult");


function gameRound(computerChoice, playerChoice){
  if(computerChoice==playerChoice){
    playerScoreDiv.textContent = `Your Score : ${playerPoint}`;
    computerScoreDiv.textContent=`My Score : ${computerPoint}`;
    finalResultDiv.textContent="Don't copy me.";
  }
  else if (computerChoice=="rock" && playerChoice == "paper"||computerChoice=="paper" && playerChoice == "scissors"||computerChoice=="scissors" && playerChoice == "rock"){
    
    playerPoint ++;
    playerScoreDiv.textContent = `Your Score : ${playerPoint}`;
    computerScoreDiv.textContent=`My Score : ${computerPoint}`;
    finalResultDiv.textContent="Don't be happy , you just one a round.";
  }
  else if (computerChoice=="scissors" && playerChoice == "paper"||computerChoice=="rock" && playerChoice == "scissors"||computerChoice=="paper" && playerChoice == "rock"){
    computerPoint ++;
    playerScoreDiv.textContent = `Your Score : ${playerPoint}`;
    computerScoreDiv.textContent=`My Score : ${computerPoint}`;
    finalResultDiv.textContent="Ah! I won as usual."
  }
  playGame();
}




function playGame(){
  if(playerPoint + computerPoint==5){
    if(playerPoint>computerPoint){
      finalResultDiv.textContent="You just got Lucky, I will surely win next time."
    }
    else if (computerPoint>playerPoint){
      finalResultDiv.textContent="I told you I never lose , better luck next time."
    }
     playerPoint=0;
     computerPoint=0;
  }
 
  }
    

