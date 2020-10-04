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
   
   new Question("1.Consider the following MOSFET.",
    ["(A)As the channel length reduces , OFF-state current increase.",
   "(B)As the channel length reduces , output resistance increases.",
"(C)As the channel length reduces , threshold voltage remains constant",
"(D)As the channel length reduces , ON-state current increases."], 
"(A)As the channel length reduces , OFF-state current increases."),
    
    new Question(".If a right handed circularly polarized wave is incident on a plane perfect conductor, then the reflected wave will be", 
    ["(A)Right handed circularly polarized", 
    "(B)Left handed circularly polarized",
    "(C)Elliptical with all angle 45degrees", 
    "(D)Horizantally polarized"],
    "(B)Left handed circularly polarized"),
    
    new Question(".An analog based signal , band limited to 100MHz, is sampled at the nyquist rate. The samples arequantized into four message symbols that occur independently with probabilities P1=P4=0.125 and P2=P3.The information rate (bits/sec) of the message source is",
    ["213.9", "456.7","142.5", "324.6"],
    "213.9"),
    new Question("An n^(+)  -n Silicon device is fabricated with uniform and non-degenerate donor doping concentrations of N D1 =1×1018 cm-3 and N D2 = 1×1015 cm-3corresponding to the n and n regions respectively.At the operational temperature T, assume complete impurity ionization, kT/q = 25 mV, and intrinsiccarrier concentration to be n i = 1×1010 cm -3.What is the magnitude of the built-in potential of this device?",
   
    ["(A) 0.748 V", 
    "(B)0.460 V",
    "(C)0.288 V ",
    "(D)0.173 V"], 
    "(D)0.173 V"),


new Question("Let (X1, X2) be independent random variables. X1 has mean 0 and variance 1, while X2 has mean 1 and variance 4. The mutual information I (X1 ; X2 ) between X1 and X2 in bits is ",
 
    ["(A)0", 
    "(B)1", 
    "(C)2 ",
    "(D)none of the above"], 
    "(A)0"),
    
    
    new Question("Consider the following statements for continuoustime linear time invariant (LTI) systems.I. There is no bounded input bounded output (BIBO) stable system with a pole in the right half of the complex plane.II. There is non causal and BIBO stable system with a pole in the right half of the complex plane. Which one among the following is correct? ",
    ["A. Both I and II are true",
    "B. Both I and II are not true",
    "C. Only I is true ",
    "D. Only I is true"],
    "D. Only I is true"),
     new Question("A half wavelength dipole is kept in the x-y plane and oriented along45 degrees from the x-axis. Determine the direction of null in the radiation pattern for 0≤∅≤π.Here the angle θ (0≤∅≤π) is measured from the zaxis, and the angle ∅(0≤∅≤2π) is measured from the x-axis in the x-y plane.",
    ["(A)θ=90°, ∅=45°",
    "(B)θ=45°, ∅=90°",
    "(C)θ=90°, ∅=135° ",
    "(D)θ=45°, ∅=135°"],
    "(A)θ=90°, ∅=45°"),
    
     new Question("The following FIVE instructions were executed on an 8085 microprocessor. MVI A, 33H<br>MVI B, 78H<br>ADD B<br> CMA<br>ANI 32H  <br>The Accumulator value immediately after the execution of the fifth instruction is",
    ["(A)00H ",
    "(B)10H",
    "(C)11H ",
    "(D)32H"],
    "(B)10H"),
    
    
    new Question("Which one of the following options correctly describes the locations of the roots of the equation s^4 +s^2 +1 =0 on the complex plane?",
    ["(A)Four left half plane (LHP) roots",
    "(B)One right half plane (RHP) root, one LHP root and two roots on the imaginary axis",
    "(C)Two RHP roots and two LHP roots",
    "(D)All four roots are on the imaginary axis"],
    "(C)Two RHP roots and two LHP roots"),

     new Question("A good transconductance amplifier should have",
    ["(A)high input resistance and low output resistance",
    "(B)low input resistance and high output resistance",
    "(C)high input and output resistances",
    "(D)low input and output resistance"],
    "(C)high input and output resistances"),
    
    
     new Question("A good transimpedance amplifier has......",
    ["(A) low input impedance and high output impedance",
    "(B) high input impedance and high output impedance.",
    "(C) high input impedance and low output impedance.",
    "(D) low input impedance and low output impedance."],
    "(D) low input impedance and low output impedance."),


new Question("A traffic signal cycles from GREEN to YELLOW, YELLOW to RED and RED to GREEN.In each cycle, GREEN is turned on for 70 seconds, YELLOW is turned on for 5 seconds and the RED is turned on for 75 seconds. This traffic light has to be implemented using a finite state machine (FSM). The only input to this FSM is a clock of 5 second period.The minimum number of flip-flops required to implement this FSM is ",
    ["(A)5.00",
    "(B)5.50",
    "(C)4.67",
    "(D)3.78."],
    "(A)5.00"),
    
    
new Question("In a p-n junction diode at equilibrium, which one of the following statements is NOT TRUE? ",
    ["(A) The hole and electron diffusion current components are in the same direction.",
    "(B) The hole and electron drift current components are in the same direction.",
    "(C) On an average, holes and electrons drift in opposite direction.",
    "(D) On an average, electrons drift and diffuse in the same direction."],
    "(D) On an average, electrons drift and diffuse in the same direction."),


new Question("A discrete-time all-pass system has two of its poles at 0.25 ∠0 degrees and 2 ∠30degrees  Which one of the following statements about the system is TRUE?",
    ["(A) It has two more poles at 0.5 ∠30degrees and 4∠0degrees",
    "(B) It is stable only when the impulse response is two-sided.",
    "(C) It has constant phase response over all frequencies.",
    "(D) It has constant phase response over the entire z-plane."],
    "(B) It is stable only when the impulse response is two-sided."),

    
     new Question("The Nyquist stability criterion and the Routh criterion both are powerful analysis tools for determining the stability of feedback controllers. Identify which of the following statements is FALSE:",
    ["(A) Both the criteria provide information relative to the stable gain range of the system.",
    "(B) The general shape of the Nyquist plot is readily obtained from the Bode magnitude plot for all minimum-phase systems",
    "(C) The Routh criterion is not applicable in the condition of transport lag, which can be readily handled by the Nyquist criterion.",
    "(D) The closed-loop frequency response for a unity feedback system cannot be obtained from the Nyquist plot."],
    "(D) The closed-loop frequency response for a unity feedback system cannot be obtained from the Nyquist plot."),

     new Question("The probability of getting a “head” in a single toss of a biased coin is 0.3. The coin is tossed repeatedly till a “head” is obtained. If the tosses are independent, then the probability of getting “head” for the first time in  the fifth toss is __________.",
    ["(A)0.07",
    "(B)0.04",
    "(C)0.06",
    "(D)0.05"],
    "(A)0.07."),
    
      
    
    
  new Question("The minimum number of 2-input NAND gates required to implement  a 2-input XOR gate is",
    ["(A) 6",
    "(B) 5 ",
    "(C) 4",
    "(D) 7"],
    "(C) 4"),
    
    new Question("The bit error probability of a memoryless binary symmetric channel is 10^−5. If 10^5 bits are sent over this channel, then the probability that not more than one bit will be in error is __________",
["(A)0.65-o.69",
"(B)0.70-0.75",
"(C)0.86-0.90",
"(D)0.80-0.85"],
   "(B)0.70-0.75"),
   
    
    new Question("A radar operating at 5 GHz uses a common antenna for transmission and reception. The antenna has a gain of 150 and is aligned for maximum directional radiation and reception to a target 1 km away having radar cross-section of 3 m^2. If it transmits 100 kW, then the received power (in μW) is________",
["(A)0.015",
"(B)0.05",
"(C)0.03",
"(D)0.06"],
   "(A)0.015"),
   

   new Question("A two-wire transmission line terminates in a television set. The VSWR measured onthe line is 5.8.The percentage of powerthat is reflected from  the television set is ______.",

["(A)54.0-55.0",
"(B)48.0-51.0",
"(C)51.5-52.5",
"(D)52.0-53.0"],
   "(B)48.0-51.0"),
   
   
    new Question("The numberof 3-digit numbers suchthat the digit 1 is never to the immediate right of 2 is",

["(A) 781",
"(B) 791",
"(C) 881",
"(D) 891"],
   "(C) 881"),

    new Question("500 students are taking one or more courses out of Chemistry. Physics. and Mathematics. Registration records indicate course enrolment as follows: Chemistry (329). Physics (186).Mathematics (295). Chemistry and Physics (83). Chemistry and Mathematics (217). and Physics and Mathematics (63). How many students are taking all 3 subjects?",

  ["(A) 37",
   "(B) 43",
   "(C) 47",
    "(D)53"],
   "(D) 53"),
   
   
   new Question("If you are looking fora history of India. or for an account of the rise and fall of the British Raj. orfor the reason of the cleaving of the subcontinent into two mutually antagonistic parts and the effects this mutilation will have in the respective sections. and ultimately on Asia. youwill not find it in these pages: for though I have spent a lifetime in the country. I lived too nearthe seat of events. and was too intimately associated with the actors, to get the perspective needed for the impartial recording of these matters. Whichofthe following statements best reflects the author’s opinion?",

["(A) Anintimate association does not allowfor the necessary perspective.",
"(B) Matters are recorded with an impartial perspective.",
"(C) Anintimate association offers an impartial perspective.",
"(D) Actors are typically associated with the impartial recording of matters."],
   "(A) Anintimate association does not allowfor the necessary perspective."),

   new Question("Each of P,Q. R. S. W. X. Y and Z has been married at most once. X and Yare married and havetwo children P and Q. Z is the grandfather of the daughter S of P. Further. Z and W are married andare parents of R. Whichoneof the following must necessarily be FALSE?",

["(A) X is the mother-in-law of R",
"(B) P and are not married to each other",
"(C) Pisason of X and Y",
"(D) Q cannot be married to R"],
   "(D) Q cannot be married to R"),
   
   new Question("1200 men and 500 womencanbuild a bridge in 2 weeks. 900 men and 250 womenwill take 3 weeks to build the same bridge. How many menwill be needed to build the bridge in one week?",

["(A) 3000",
"(B) 3300",
"(C) 3600",
"(D) 3900"],
   "(C) 3600"),

   new Question("The ninth and the tenth of this month are Mondayand Tuesday",

["(A) figuratively",
"(B) retrospectively",
"(C) respectively",
"(D) rightfully"],
   "(C) respectively"),
   
   new Question("Fatima starts from point P. goes North for 3 km. and then East for 4 kmto reach point Q. She thenturns to face point P and goes 15 kminthat direction. She then goes North for 6 km. Howfaris she from point P. and in whichdirection should she go to reach point P?",

  ["(A) 8 km, East",
   "(B) 12 km, North",
   "(C) 6km. East",
   "(D) 10 km, North"],
   "(A) 8 km, East"),
   
   
   new Question("Standard air-filled rectangular waveguides of dimensions a = 2.29 cm and b = 1.02 cmare designed for radar applications. It is desired that these waveguides operate only in the dominant TE;> mode with the operating frequency at least 25% above the cutoff frequency of the TE:o mode but not higher than 95%of the next higher cutoff frequency. The range of the allowable operating  frequencyf is",

  ["(A) 8.19 GHz = f < 13.1 GHz",
   "(B) 8.19-GHz <= f s 12.45 GHz",
   "(C) 6.55 GHz <= f < 13.1 GHz",
   "(D) 1.64 GHz <= f = 10.24 GHz"],
   "(B) 8.19-GHz <= f s 12.45 GHz"),
   
   new Question("The signal x(t) = sin(14000mt). where t is in seconds, is sampled at a rate of 9000 samples per second. The sampled signal is the input to an ideal lowpassfilter with frequency response H(f) as follows: H(f)=1, |f| < = 12 kHz,H(f)=0,|f| > 12 kHz. Whatis the numberof sinusoids in the output and their frequencies in kHz?",

  ["(A) Number = 1, frequency = 7",
   "(B) Number = 3, frequencies = 2,7,11",
   "(C) Number = 2, frequencies = 2,7",
   "(D) Number = 2, frequencies = 7,11"],
   "(B) Number = 3, frequencies = 2,7,11"),
   new Question("In an 8085 microprocessor, the contents of the accumulator and the carry flag are A7 (in hex) and 0,respectively. If the instruction RLC is executed, then the contents of the accumulator (in hex) and the carry flag, respectively, will be",

  ["(A) 4E and 0 ",
   "(B) 4E and 1 ",
   "(C) 4F and 0 ",
   "(D) 4F and 1"],
   "(D) 4F and 1"),

   new Question("A continuous-time speech signal xa(t) is sampled at a rate of 8 kHz and the samples are subsequently grouped in blocks, each of size N. The DFT of each block is to be computed in real time using the radix-2 decimation-in-frequency FFT algorithm. If the processor performs all operations sequentially, and takes 20 μs for computing each complex multiplication (including multiplications by 1 and −1) and the time required for addition/subtraction is negligible, then the maximum value of N is __________",

  ["(A)4096",
   "(B)4098",
   "(C)4097 ",
   "(D)4095"],
   "(A)4096"),

   new Question("An ideal band-pass channel 500 Hz - 2000 Hz is deployed for communication. A modem is designed to transmit bits at the rate of 4800 bits/s using 16-QAM. The roll-off factor of a pulse with a raised cosine spectrum that utilizes the entire frequency band is ________",

  ["(A)0.20-0.22",
   "(B)0.24-0.26",
   "(C)0.22-0.23 ",
   "(D)0.27-0.2"],
   "(B)0.24-0.26"),
   new Question("A speech signal is sampled at 8 kHz and encoded into PCM format using 8 bits/sample. The PCM data is transmitted through a baseband channel via 4-level PAM. The minimum bandwidth (in kHz) required for transmission is ________",

 ["(A)15.9-16.1",
   "(B)16.2-16.4",
   "(C)15.7-15.8 ",
   "(D)15.4-15.6"],
   "(A)15.9-16.1"),

   new Question("The Ebers-Moll model of a BJT is valid",

   ["(A) only in active mode",
   "(B) only in active and saturation modes",
   "(C) only in active and cut-off modes ",
   "(D) in active, saturation and cut-off modes"],
    "(D) in active, saturation and cut-off modes"),

   new Question("How many distinct values of 𝑥 satisfy the equation sin(𝑥) = 𝑥/2, where 𝑥 is in radians?",

   ["(A) 1",
   "(B) 2",
   "(C) 3 ",
   "(D) 4 or more "],
    "(C) 3"),
   

    
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




