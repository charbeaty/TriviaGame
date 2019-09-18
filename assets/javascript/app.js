let quizQuestions = [
    {
        question: "A group of hippos is called what?",
        choices: ["Herd","Cackle","Bloat","Float"],
        correctAnswer:"Bloat"
},
    {
        question: "Who invented the word nerd?",
        choices: ["Donald Trump", "William Shakespeare", "Dr. Suess", "Marie Curie"],
        correctAnswer:"Dr. Suess"
},
    {
        question: "The little dot above a lowercase i and j is called what?",
        choices: ["Teeny-weeny", "Itty-bitty", "Dot", "Tittle"],
        correctAnswer:"Tittle"
},
    {
        question: "Pogonophobia is known as the fear of what?",
        choices: ["Beards", "Rabbits", "Bananas", "Fingernails"],
        correctAnswer:"Beards"
},
    {
        question: "What condiment was once used to cure diarrhea, indigestion, jaundice, and rheumatism?",
        choices: ["Mayonnaise", "Mustard", "Ketchup", "Honey Mustard"],
        correctAnswer:"Ketchup"
},
    {
        question: "On average, how many dimples does a golf ball have?",
        choices: ["525", "200", "450", "336"],
        correctAnswer:"336"
},
    {
        question: "In which U.S. state is it illegal to hunt camels?",
        choices: ["Maine", "Arizona", "California", "New Hampshire"],
        correctAnswer:"Arizona"
},
    {
        question: "How many hearts does an octopus have?",
        choices: ["3", "5", "2", "1"],
        correctAnswer:"3"
},
    {
        question: "In a deck of cards, which suite has a king without a mustache?",
        choices: ["Spades", "Hearts", "Clovers", "Diamonds"],
        correctAnswer:"Hearts"
},
    {
        question: "The average adult spends more time doing this then they do exercising",
        choices: ["Waiting in Line", "Cleaning", "Thinking about exercising", "Using the restroom"],
        correctAnswer:"Using the restroom"
}
];

let counter = 10;
let currentQuestion = 0; //pull first question from array
let correct = 0; 
let incorrect = 0;
let timer;

//function nextQuestion() {

    //let isQuesitonOver = (quizQuestions.length - 1) === currentQuestion;
    
   // if(isQuestionOver) {
       // console.log('Game is over!')
   // }
    //else {
    //currentQuestion++;
    //loadQuestion();
   // }


function timeUp() {
    clearInterval(timer);

    incorrect++;
    //nextQuestion();
}



function countDown() {
    counter--;

    $("#time").html("Time Remaining: " + counter);

    if (counter === 0) {
        timeUp();
    }
}

function loadQuestion() {

    counter = 10;
    timer = setInterval(countDown, 1000);

    let question = quizQuestions[currentQuestion].question;
    let choices = quizQuestions[currentQuestion].choices;

   $("#time").html("Time Remaining: " + counter);
    $("#game").html("<h4>" + question + "</h4>");
    loadChoices(choices);

};




//loadQuestion();

function loadChoices(choices) {
let result = '';

for (let i = 0; i < choices.length; i++) {
    result += $("#game").append("<p>" + choices[i] + "</p>");
    
}
return result;
}

$(document).on('click', quizQuestions.choices, function() {
    console.log('Its been clicked!');
})

loadQuestion();

//multiple choice questions (10 max)
//can only choose one choice
//when time runs out, go to "Finished" screen
//Finished screen should include: All Done! correct answers
//incorrect answers
//unanswered
