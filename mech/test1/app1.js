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
   
    new Question(" A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of thetrai? ", 
    ["A.	120 metres",
    "B.	180 metres",
    "C.	324 metres", 
    "D.	150 metres"], 
    "D.	150 metres"),
    
     new Question(" The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:", 
     ["A.	200 m",
     "B.	225 m",
     "C.	245 m",
     "D.	250 m"],
     "C.	245 m"),
     new Question(" Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
     ["A.	1 : 3", 
     "B.	3 : 2",
     "C.	3 : 4",
     "D.	None of these"], 
     "B.	3 : 2"),
     new Question(" A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?", ["230 m", "240 m","270 m", "260 m"], "270 m"),
     
     new Question("train 110 metres long is running with a speed of 60 kmph. In what time will it pass a man who is running at 6 kmph in the direction opposite to that in which the train is going? ", ["5 sec", "6 sec","7 sec", "10 sec"], "6 sec"),
     
    new Question(" A train 800 metres long is running at a speed of 78 km/hr. If it crosses a tunnel in 1 minute, then the length of the tunnel (in meters) is", ["130", "360","500", "540"], "500"),
    
    new Question(" A train speeds past a pole in 15 seconds and a platform 100 m long in 25 seconds. Its length is:", ["50", "150","200", "Data inadequate"], "150"),

     new Question(" Two goods train each 500 m long, are running in opposite directions on parallel tracks. Their speeds are 45 km/hr and 30 km/hr respectively. Find the time taken by the slower train to pass the driver of the faster one.", ["12", "24","48", "60"], "24"),
     
    new Question(" Two stations A and B are 110 km apart on a straight line. One train starts from A at 7 a.m. and travels towards B at 20 kmph. Another train starts from B at 8 a.m. and travels towards A at a speed of 25 kmph. At what time will they meet?", ["9 am", "10:30 am","10 am", "11 am"], "10 am"),
    
     new Question("A train travelling at 48 kmph completely crosses another train having half its length and travelling in opposite direction at 42 kmph, in 12 seconds. It also passes a railway platform in 45 seconds. The length of the platform is ", ["400", "450","560", "600"], "400"),
    
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




