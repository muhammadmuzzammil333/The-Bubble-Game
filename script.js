
let bubbleContainer = document.querySelector("#random-bubbles-container");
let hitValue = document.querySelector(".hit-value");
let scoreValue = document.querySelector(".score-value");

var bubble;
let hitNumber;
var timer = 60;


const makeBubble = () => {
    // Step 1: Remove all old bubbles before creating new ones
    bubbleContainer.innerHTML = ""; 

    // Step 2: Create new bubbles and add them to the container
    for (let i = 0; i < 128; i++) { //Bydefault 112
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.id = "bubble";
        bubble.innerText = Math.floor(Math.random() * 11);
        bubbleContainer.appendChild(bubble);
    }
};

makeBubble();


const timeOverFunction = (() => {
    bubbleContainer.innerHTML = "";
    let timeOver = document.createElement("div");
    timeOver.classList.add("time-over");
    timeOver.id = "time-over";
    timeOver.innerHTML = `<h1>Time is over. The Score is ${scoreValue.innerText}</h1>`
    bubbleContainer.appendChild(timeOver);
});





const increaseScore = (() => {
    let valueOfScore = Number(scoreValue.innerText);
    valueOfScore += 5;
    scoreValue.innerText = valueOfScore;
});

const decreaseScore = (() => {
    let valueOfScore = Number(scoreValue.innerText);
    valueOfScore -= 5;
    scoreValue.innerText = valueOfScore;
});



    const timeRunner = (() => {
        let timeInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                document.querySelector(".timer-value").innerText = timer;          
            } else {
                timeOverFunction();
                clearInterval(timeInterval);
                hitValue.innerText = "";
                scoreValue.innerText = "";
                document.querySelector(".timer-value").innerText = "";
            }
        }, 1000);
    });

timeRunner();

const hitValueFunction = (() => {
    hitNumber = hitValue.innerText = Math.floor(Math.random() * 10);
});

hitValueFunction();

bubbleContainer.addEventListener("click", (details) => {
    if (details.target.classList.contains("bubble")) {
        let clickedNumber = Number(details.target.innerText);
        if (clickedNumber === hitNumber){
            increaseScore();
            makeBubble();
            hitValueFunction();
        }
        else {
            decreaseScore();
            makeBubble();
            hitValueFunction();
        }
    }
});


