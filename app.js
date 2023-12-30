let choices = document.querySelectorAll(".choice");
let yourSore = document.querySelector("#Yscore");
let compScore = document.querySelector("#Cscore");
let resetBtn = document.querySelector("#reset");
let message = document.querySelector(".msg");

let userScore = 0;
let computerScore = 0;

const resetScore = () =>{
    yourSore.innerText = "0";
    compScore.innerText = "0";
    userScore = 0;
    computerScore = 0;
    message.innerText = "Play Your Move";
    message.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        message.innerText = `Your ${userChoice} is win over ${compChoice}`;
        message.style.backgroundColor = "green";
        userScore++;
        yourSore.innerText = userScore;
    }else{
        message.innerText = `Your ${userChoice} is lost over ${compChoice}`;
        message.style.backgroundColor = "red";
        computerScore++;
        compScore.innerText = computerScore;
    }
}

const drawGame = () =>{
    message.innerText = "Game is draw, play again";
    message.style.backgroundColor = "black";
}

const genCompChoice = () =>{
    let options = ["rock", "paper", "sessiors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // compChoice = paper/sessiors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // compChoice = sessiors/rock
            userWin = compChoice === "sessiors" ? false : true; 
        }else if(userChoice === "sessiors"){
            // compChoice = rock/sessiors
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetBtn.addEventListener("click", resetScore);
