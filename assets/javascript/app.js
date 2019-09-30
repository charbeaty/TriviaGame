$(document).ready(function () {  
     //Counter variables
    var gameTimer = 10;
    var currentQuestion = 1; //pull first question from array
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var timer;

    var intervalId;

var triviaQuestions = {

      "1":  {
            trivia: "On average, how many dimples does a golf ball have?",
            choices: ["525", "200", "450", "336"],
            answer: "336"
        },
      "2": {
            trivia: "In which U.S. state is it illegal to hunt camels?",
            choices: ["Maine", "Arizona", "California", "New Hampshire"],
            answer: "Arizona"
        },
       "3": {
            trivia: "How many hearts does an octopus have?",
            choices: ["3", "5", "2", "1"],
            answer: "3"
        },
      "4": {
            trivia: "In a deck of cards, which suite has a king without a mustache?",
            choices: ["Spades", "Hearts", "Clovers", "Diamonds"],
            answer: "Hearts"
        },
      "5": {
            trivia: "The average adult spends more time doing this then they do exercising",
            choices: ["Waiting in Line", "Cleaning", "Thinking about exercising", "Using the restroom"],
            answer: "Using the restroom"
        }
};

 
 //Load Game
$("#start").click(function(){
     resetGame();
    playGame(currentQuestion);
});

//Reset Game
function resetGame() {
    clearScreen();
    currentQuestion = 1;
    gameTimer = 10;
    rightAnswer = 0;
    wrongAnswer = 0;
    timer = 0;
}

//Clear the Screen
function clearScreen() {
   $('#time').empty(); 
   $("#question").empty(); 
   $("#results").empty(); 
}

//Display Questions
function playGame() {
    clearScreen();
    if (currentQuestion === 6) {
        gameOver();
    } else { 
        //Create questions and possible results/correct answer
        var newQuestion = triviaQuestions[currentQuestion].trivia;
        var possibleAnswers = triviaQuestions[currentQuestion].choices;
        var correctAnswer = triviaQuestions[currentQuestion].answer;

        //Push Question on screen
        $('#question').text(newQuestion);
            questionTimer(); 
        
        //Loop through and push possible results
        for (var i = 0; i < possibleAnswers.length; i++) {
            var answerDiv = $("<div>");
            var answerButtons = $("<button>");
            answerButtons.attr('data-value', possibleAnswers[i]);
            answerButtons.text(possibleAnswers[i]);
            answerButtons.addClass("chooseAnswer");

            answerDiv.append(answerButtons);
            $("#results").append(answerDiv);
        }

        $(".chooseAnswer").click(function() {
            var chosenAnswer = $(this).attr('data-value');

            if (chosenAnswer === correctAnswer) {
                correctGuess();
                setTimeout(function(){
                    playGame(currentQuestion)}, 3000);
            } else {
                incorrectGuess();
                setTimeout(function(){
                    playGame(currentQuestion)}, 3000);
            }
        })
            
    }
}

//Correct Guess
function correctGuess() {
    rightAnswer++;
    stopTimer();
    gameTimer = 10;
    $('#time').text(gameTimer);
    clearScreen();
    $('#question').text("You chose...wisely!");
    $('#results').html('Answer: ' + triviaQuestions[currentQuestion].answer);
    currentQuestion++;
}

//Incorrect Guess
function incorrectGuess() {
    wrongAnswer++;
    stopTimer();
    gameTimer = 10;
    $('#timer').text(gameTimer);
    clearScreen();
    $('#question').text("You chose...poorly!")
    $('#results').html('Answer: ' + triviaQuestions[currentQuestion].answer);
    currentQuestion++;
}

//Question Timer
function questionTimer () {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    gameTimer--;
    $('#time').text(gameTimer)

    if (gameTimer === 0) {
        timesUp();
    }
}

//Times Up
function timesUp() {
    timer++;
    stopTimer();
    gameTimer = 10;
    clearScreen();
    $('#time').text(gameTimer);
    currentQuestion++;
    setTimeout(function(){
        playGame(currentQuestion)}, 3000);
    $('#results').html('Answer: ' + triviaQuestions[currentQuestion].answer);
}

function stopTimer() {
    clearInterval(intervalId)
}

//Game Over
function gameOver() {
    clearScreen();
    $("#start").show();
    $("#results").append('<p>Right Answers: ' + rightAnswer + '</p><br>');
    $('#results').append('<p>Wrong Answers: ' + wrongAnswer + '</p><br>');
    $('#results').append('<p>Unanswered: ' + timer + '</p>');

    if (rightAnswer > wrongAnswer+timer) {
        $('#time').text("You are a winner!");
    } else {
        $('#time').text('You lost!');
    }

    
    
    

}



});
