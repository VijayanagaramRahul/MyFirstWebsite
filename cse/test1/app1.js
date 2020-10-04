function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Extreme focus on syllabus and studying for tests has become such a dominant concern of Indian students that they close their minds to anything ______ to the requirements of the exam", [" related", " extraneous"," outside ", "useful"], "extraneous"),
    
    new Question("A function f x( ) is linear and has a value of 29 at x =− 2 and 39 at x = 3. Find its value at x =.",
    ["59", "45", "43", "35"], "43"),
    
    new Question("Given digits 2, 2, 3, 3, 3, 4, 4, 4, 4 how many distinct 4 digit numbers greaterthan 3000 can be formed?", ["50", "52","51", "54"], "51"),
    new Question("If ROAD is written as URDG, then SWAN should be written as:", ["VXDQ", "VZDQ", "VZDP", "UXDQ"], "VZDQ"),
    new Question("Select the pair that best expresses a relationship similar to that expressed in the pair:Children: Pediatrician", ["Adult: Orthopaedist", "Females: Gynaecologist", "Kidney: Nephrologist", "Skin: Dermatologist"], "Females: Gynaecologist"),
    new Question("What is the average of all multiples of 10 to 198?", ["90", "100", "110", "120"], "100"),
     new Question("Who ______ was coming to see us this evening?", ["you said ", "did you say", "did you say that", "had you said"], "did you say"),
      new Question("Which of the following options is the closest in meaning to the word below? Circuitous", ["Cyclic ", "Indirect", "Confusing ", "Crooked"], "Indirect"),
       new Question("25 persons are in a room, 15 of them play hockey, 17 of them play football and 10 of them play both hockey and football. Then the number of persons playing neither hockey nor football is", ["2", "7", "13", "3"], "3"),
       new Question("If 137 + 276 = 435 how much is 731 + 672?", ["534 ", "1403", "1623 ", "1531"], "1623 ")
       
];




// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




