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
    new Question(".A generic term that includes various items of clothing such as a skirt, a pair of trousers and a shirt as",
   ["(A) fabric  " , 
   "(B) textile",
   "(C) fibre ", 
   "(D) apparel"], 
   "(D) apparel"),
     
   
    new Question("Choose the statement where underlined word is used correctly.", ["(A) The industrialist had a personnel jet.", "(B) I write my experience in my personnel diary.","(C) All personnel are being given the day off.", "(D) Being religious is a personnel aspect."], "(C) All personnel are being given the day off."),
    new Question("We ______ our friend’s birthday and we ______ how to make it up to him.", 
    ["(A) completely forgot _____ don’t just know", 
    "(B) forget completely _____ don’t just know",
    "(C) completely forget _____ just don’t know",
    "(D) forgot completely _____ just don’t know"], 
    "(C) completely forget _____ just don’t know"),
    new Question(" Which of the following combinations is incorrect?", 
    ["(A) Acquiescence – Submission",
    "(B) Wheedle – Roundabout",
    "(C) Flippancy – Lightness", 
    "(D) Profligate – Extravagant"], 
    "(B) Wheedle – Roundabout"),
    
    new Question(" Which of the following options is the closest in meaning to the sentence below ? She enjoyed herself immensely at the party.", 
    ["She enjoyed herself immensely at the party. ", 
    " (B) She had a horrible time at the party.   ",
    " (C) She had a terrific time at the party.",
    " (D) She had a terrifying time at the party."], 
    " (C) She had a terrific time at the party. "),
    new Question("Didn’t you buy _______ when you went shopping ? ", 
    ["(A) any paper ",
    "(B) much paper",
    "(C) no paper ", 
    "(D) a few paper"],
    "(A) any paper"),
    new Question("Select the alternative meaning of the underlined part of the sentence. The chain snatchers took to their heels when the police party arrived. ", [" (A) took shelter in a thick jungle", "(B) open indiscriminate fire","(C) took to flight", "( D) unconditionally surrendered"], " (C) took to flight"),
    new Question("Which of the following options is the closest in meaning to the phrase underlined in the sentence below ?It is fascinating to see life forms cope with varied environmental conditions.",
    
    ["(A) adopt  ","(B) adapt to ","(C) adept in" ,"(D) accept with "], "(B) adapt to"),
    new Question(" Choose the most appropriate word from the options given below to complete the following sentence.He could not understand the judges awarding her the first prize, because he thought that her performance was quite ____ ", ["(A) superb  ", "(B) medium","(C) mediocre ", "(D) exhilarating"], "(C) mediocre "),
    
    
    
     new Question("Which one of the following options is the closest in meaning to the word given below ? latitude ", [" (A) Eligibility ", "(B) Freedom","(C) Coercion  ", "(D) Meticulousness"], "(B) Freedom "),
    
    
    
    
    
    
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




