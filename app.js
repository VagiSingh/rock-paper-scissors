
const computerSelection= function getComputerChoice(){
const random = Math.random();

if(random>0 && random<=0.33){
  return "rock";
}
else if (random>0.33 &&random<=0.66){
   return "paper";
}
else{
    return "scissors"
}
};


