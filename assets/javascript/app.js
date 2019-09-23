$(document).ready(function () {
    var triviaQuestions = [

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
    var gameTimer = 10;
    var currentQuestion = 0; //pull first question from array
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var timer;

    //load game
    $("#start").click(function () {
        loadQuestion(currentQuestion);
        // console.log(currentQuestion);
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
        clearInterval();
        currentQuestion++;
        wrongAnswer++;
        //rightAnswer++;


    }



    function countDown() {
        gameTimer--;
        $("#time").html("Time Remaining: " + gameTimer);

        if (gameTimer === 0) {
            timeUp();
        }
    }

    function loadQuestion() {

        gameTimer = 10;
        timer = setInterval(countDown, 1000);

        var question = triviaQuestions[currentQuestion].question;
        var choices = triviaQuestions[currentQuestion].choices;



        $("#time").html("Time Remaining: " + gameTimer);
        $("#trivia").html("<h4>" + question + "</h4>");
        // $("#results").html("<h4>" + correctChoice + "</h4>");
        loadChoices(choices);
    }



    function loadChoices(choices) {
        var result = '';

        for (var i = 0; i < choices.length; i++) {
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


    $("body").on("click", ".options",function () {
        var clickedAnswer = $(this).attr('data-value');
        var answer = triviaQuestions[currentQuestion].answer;
        console.log('selected', clickedAnswer)

        if (clickedAnswer === answer) {
            //indicate correct answer
            alert("You got it right!");
        } else {
            //indicate incorrect answer
            alert("You got it wrong!")
        }
        //bring up next question
        //empty previous choices and question
        currentQuestion++;
        loadQuestion();
    })



    // $(document).on('click', "#options", function () {
    //     console.log('.options');
    // })



});
