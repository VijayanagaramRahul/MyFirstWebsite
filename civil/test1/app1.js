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
    new Question(" One percent of the people of country X are taller than 6 ft. Two percent of the people ofcountry Y are taller than 6 ft. There are thrice as many people in country X as in country Y.Taking both countries together, what is the percentage of people taller than 6 ft??",
    ["(A)3.0 ",
    "(B) 2.5  ",
    "(C) 1.0 ", 
    "(D)1.25 "], 
    "(D)1.25 "),
    
    new Question("For two major-roads with divided carriage way crossing at right angle, a full clover leaf interchange with four indirect ramps is provided. Following statements are made on turning movement of vehicles to all direction from both roads. Identity the correct statement?",
    ["(A) Merging from left is not possible, but diverging to left is possible",
    "(B) Merging from left and diverging to left is possible not  possible", 
    "(C) Merging from left is possible but diverging is not possible",
    "(D) Neither merging from left nor diverging to left is possible"],
    "(B) Merging from left and diverging to left is possible"),
    
    new Question("For subcritical flow in an open channel, the control section for gradually variedflow profile is.", ["(A) at the downstream end ", 
    "(B) at the upstream end",
    " (C) at the both end s", 
    " (D)  at any intermediate section"],
    "(C) at the both end s"),
    
    new Question(" Creep strain is",
    [" (A) caused due to dead load only ",
    " (B) caused due to live load only",
    " (C) caused due to cyclic load only ", 
    "(D) independent of load"], 
    "(D) independent of load"),
    new Question(" In its natural condition a soil sample has a mass of 1.980 kg and a volume of3 0.001m . After being completely dried in an oven, the mass of the sample is1.800 kg. Specific gravity is 2.7. Unit weight of water is 3 10kN / m . The degree of saturation of soil is", 
[" (A) 0.65", 
" (B) 0.7 ", 
" (C) 0.54 ",
" (D) 0.61"], 
"(C) 0.54 "),
    
    new Question("A landfill is to be designed to serve a population of200000 for a period of 25 years. The solid waste (SW)generation is 2 kg/person/day. The density of the uncompacted SW is 100 kg/m3 and a compaction ratio of 4is suggested. The ratio of compacted fill (i.e. SW +cover) to compacted SW is 1.5. The landfill volume (inmillion m3) required is _______..",
    ["(A) 20.4", 
    "(B) 14.6", 
    "(C) 21.9", 
    "(D) 15.6"], 
    "(C) 21.9"),
    new Question(" The magnitude of discharge occurring between the stream line passing throughpoints (0, 3) and (3, 4) is",
    [" (A) 6 units ",
    "(B) 3 units ",
    "(C) 1.5 units ", 
    "(D) 2 units"], 
    "(B) 3 units"),
    new Question("Select the strength parameter of concrete used in design of plain jointed cementpavement from the following choices:", 
    ["(A) Tensile strength ",
    "(B) Compressive strength", 
    "(C) Flexural strength ",
    "(D) Shear strength"], 
    "(C) Flexural strength"),
    
    new Question(" Four columns of building are to be located within a plot size of 10m 10m × . Theexpected load on each column is 400 kN. Allowable bearing capacity of soildeposit is 2 100kN / m . The type of foundation to be used is",
    ["(A) Isolated foundation",
    "(B) Raft foundation", 
    "(C) Pile foundation ",
   "(D) Combined foundation "], 
    "(A) Isolated foundation"),
    
    new Question("Following statement are made on compacted soil, where DS stands for soilcompaction on Dry Side of OMC and WS stands for soil compacted on Wet Side of OMC. Identify incorrect statement.",
    [" (A) Soil structure is flocculated on DS and dispersed on WS", 
    " (B) Construction of pore water pressure is low on DS and High on WS", 
    "(C) Soil on drying, shrinkage is high on DS and Low on WS",
    " (D) On addition to water, swelling is high on DS and low on WS"], 
    "(C) Soil on drying, shrinkage is high on DS and Low on WS"),
   ];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




