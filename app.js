// Initialize user and computer scores
let userscore = 0;
let compscore = 0;

// Load audio files for game sounds
let draw = new Audio('draw.wav');
let lose = new Audio('lose.wav');
let win = new Audio('win.wav');

// Select all elements with class "choice" and message element
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

// Select elements to display user and computer scores
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

// Function to generate computer's choice (rock, paper, or scissor)
const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randindx = Math.floor(Math.random() * 3);
    return options[randindx];
}

// Function to handle draw game scenario
const drawGame = () => {
    msg.innerText = "Game was Draw play again";
    draw.play();
    msg.style.backgroundColor = "black";
}

// Function to display winner of the game
const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        msg.innerText = `You win Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
        win.play();
        userscore++
        userscorepara.innerText = userscore
    } else {
        compscore++
        compscorepara.innerText = compscore
        msg.innerText = `You lose ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor = "red";
        lose.play();
    }
}

// Function to play the game based on user's choice
const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true
        }
        showwinner(userwin, userchoice, compchoice)
    }
};

// Add event listener to each choice element
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Get user's choice from clicked element
        const userchoice = choice.getAttribute("id");
        // Call playgame function with user's choice
        playgame(userchoice)
    })
});


