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
    new Question("Choose the most suitable one word substitute for the following expression: Connotation of a road or way", 
    ["(A) Pertinacious",
    "(B) Viaticum",
    "(C) Clandestine", 
    "(D) Ravenous"], 
    "(B) Viaticum"),
    
    new Question("Choose the correct verb to fill in the blank below: Let us______.", 
    ["(A) introvert",
    "(B) alternate", 
    "(C) atheist", 
    "(D) altruist"], 
    "(B) alternate"),
    new Question("Find the missing sequence in the letter series below:A, CD, GHI,?, UVWXY", 
    ["(A) LMN", 
    "(B) MNO",
    "(C) MNOP", 
    "(D) NOPQ"], 
    "(C) MNOP"),
    new Question("Choose the most appropriate word from the options given below to complete the following sentence.If the athlete had wanted to come first in the race, he ______ several hours every day.", 
    ["(A) should practise", 
    "(B) should have practised", 
    "(C) practised", 
    "(D) should be practising"], 
    "(B) should have practised"),
    new Question("Ram and Shyam shared a secret and promised to each other that it would remain between them. Ram expressed himself in one of the following ways as given in the choices below. Identify the correct way as per standard English.", 
    ["(A) It would remain between you and me", 
    "(B) It would remain between I and you", 
    "(C) It would remain between you and I", 
    "(D) It would remain with me"], 
    "(A) It would remain between you and me"),
    new Question("From a circular sheet of paper of radius 30 cm, a sector of 10% area is removed. If the remaining part is used to make a conical surface, then the ratio of the radiusand height of the cone is_______.", 
    ["(A)1.13", 
    "(B)1.15", 
    "(C)1.16", 
    "(D)1.11"], 
    "(D)1.11"),
    new Question("What is the adverb for the given word ?Misogynous",
    ["(A) Misogynousness",
    "(B) Misogynity",
    "(C) Misogynously", 
    "(D) Misogynous"],
    "(C) Misogynously"),
    new Question("Choose the appropriate word-phrase out of the four options given below, to complete the following sentence Dhoni, as well as the other team members of Indian team ______ present onthe occasion",
    ["(A) Were ",
    "(B) Was",
    "(C) Has",
    "(D) Have"],
    "(B) Was"),
    new Question("Choose the word most similar in meaning to the given word:Awkward",
    ["(A) Inept",
    "(B) Graceful",
    "(C)Suitable",
    "(D) Dreadful"],
    "(A) Inept"),
    new Question("A tiger is 50 leaps of its own behind a deer. The tiger takes 5 leaps per minuteto the deer’s 4. If the tiger and the deer cover 8 metre and 5 metre per leaprespectively. What distance in metres will the tiger have to run before it catches the deer ?",
    ["(A)850",
    "(B)690",
    "(C)700",
    "(D)800"],
    "(D)800")

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




