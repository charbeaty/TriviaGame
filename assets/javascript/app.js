let triviaQuestions = [

    {
        question: "On average, how many dimples does a golf ball have?",
        choices: ["525", "200", "450", "336"],
        answer: "336"
    },
    {
        question: "In which U.S. state is it illegal to hunt camels?",
        choices: ["Maine", "Arizona", "California", "New Hampshire"],
        answer: "Arizona"
    },
    {
        question: "How many hearts does an octopus have?",
        choices: ["3", "5", "2", "1"],
        answer: "3"
    },
    {
        question: "In a deck of cards, which suite has a king without a mustache?",
        choices: ["Spades", "Hearts", "Clovers", "Diamonds"],
        answer: "Hearts"
    },
    {
        question: "The average adult spends more time doing this then they do exercising",
        choices: ["Waiting in Line", "Cleaning", "Thinking about exercising", "Using the restroom"],
        answer: "Using the restroom"
    }
];

//Counter variables
let gameTimer = 10;
let currentQuestion = 0; //pull first question from array
let rightAnswer = 0;
let wrongAnswer = 0;
let timer;

//load game
$("#start").click(function () {
    startGame(currentQuestion);
    console.log(currentQuestion);
})

//resets game
function resetGame() {
    gameTimer = 10;
    currentQuestion = 0; //pull first question from array
    rightAnswer = 0;
    wrongAnswer = 0;
    timer;
}

function timeUp() {
    clearInterval(timer);
    currentQuestion++;
    wrongAnswer++;
    rightAnswer++;


}



function countDown() {
    gameTimer--;
    currentQuestion++;
    $("#time").html("Time Remaining: " + gameTimer);

    if (gameTimer === 0) {
        timeUp();
    }
}

function startGame() {

    gameTimer = 10;
    timer = setInterval(countDown, 1000);
    currentQuestion = 0;

    let question = triviaQuestions[currentQuestion].question;
    let choices = triviaQuestions[currentQuestion].choices;
    let correctChoice = triviaQuestions[currentQuestion].answer;



    $("#time").html("Time Remaining: " + gameTimer);
    $("#trivia").html("<h4>" + question + "</h4>");
    //$("#results").html("<h4>" + correctChoice + "</h4>");
    loadChoices(choices);




   function loadChoices(choices) {
    let result = '';

    for (let i = 0; i < choices.length; i++) {
        var answerDiv = $("<div>");
        var choicesButtons = $("<button>");
        choicesButtons.attr('data-value', choices[i]);
        choicesButtons.text(choices[i]);
        choicesButtons.addClass("options");

        answerDiv.append(choicesButtons);
        $("#results").append(answerDiv);
        // result += $("#trivia").append("<p>" + choices[i] + "</p>");
        // $("p").addClass("options");


    }
    return result;
}

$(document).on('click', "#options", function () {
    console.log('.options');
})

};

//startGame();

