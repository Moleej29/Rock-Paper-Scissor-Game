let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const drawGame=()=>{
    console.log("game was draw");
    msg.innerHTML="Game was Draw. Play Again";
    msg.style.backgroundColor= "#081b31";
};

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you win!");
        msg.innerHTML=`You Win!.Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        console.log("you lose!");
        msg.innerHTML=`You Lose!. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor= "red";
    }
};

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
     const randomInx=Math.floor(Math.random()*3);
     return options[randomInx];

}

const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //genertae user choice...->modular function
    const compchoice=genCompChoice();
    console.log("comp choice=", compchoice);
   
    if(userchoice===compchoice){
        drawGame();

    } 
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissors"?false:true;
        }
        else{
            userwin=compchoice=="rock"?false:true;
        }
        showWinner(userwin);
        
    }
};
choices.forEach((choice) => {
  
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame( userchoice);
    });
});