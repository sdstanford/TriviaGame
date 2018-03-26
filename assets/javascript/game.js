//Create object with questions and answers array

var qAndA = [
    {
    question: "Which of these is NOT one of Chicagos nicknames?", 
    answers: {
        a: "The Windy City", 
        b: "The City of Big Shoulders", 
        c: "The Little Apple", 
        d: "The Second City"
    },
        correctAnswer: "c"
    },
    {
    question: "The Chicago Cubs won the World Series in 2016. Before then, how many years had it been since their last World Series win?", 
    answers: {
        a: "108",
        b: "71",
        c: "56",
        d:"122"
    },
        correctAnswer: "a"
    },
    {
    question: "For what holiday is the Chicago River dyed every year?",
    answers: {
        a: "Valentines Day", 
        b: "St. Patrick's Day", 
        c: "Christmas", 
        d: "Fourth of July"
    },
        correctAnswer: "b"
    },
    {
    question: "Which of these was invented in Chicago?",
    answers: {
        a: "The Zipper",
        b: "The Twinkie",
        c: "The Ferris Wheel",
        d: "All of the Above"
    },
        correctAnswer: "d"
    },
    {
    question: "How many states are visible from the top of Chicago's Sears Tower?",
    answers: {
        a: "Six", 
        b: "Five", 
        c: "Four", 
        d: "Three"
    },
        correctAnswer: "c"
    },
    {
    question: "The Chicago River is the only River in the world that _______.",
    answers: {
        a: "Flows backwards", 
        b: "Divides a city equally", 
        c: "Is naturally green", 
        d: "Contains catfish"
    },
        correctAnswer: "a"
    },
];

// Create main quiz function at startup

    window.onload = function startQuiz(){
        // Create array to store quiz
        var output = [];
      
        // Create for loop
        qAndA.forEach(
          (currentQuestion, questionNumber) => {
      
            // Create array to store answers
            var answers = [];
      
            // Add click/radio buttons in front of each letter choice
            for(letter in currentQuestion.answers){
              answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
              );
            }
      
            // Add question and answer to divs
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
          }
        );
      
        // Append divs to page
        $("#primary").append(output);
      }
    //For each iteration of loop, display question and answers in appropriate HTML locations
    // console.log(qAndA[i].question);
    // console.log(qAndA[i].answers);
    
    //Add radio buttons to answers

    //Create variable to store userChoice
    var userChoice = "";

    //Create variables to hold correct and wrong answers, display at end of quiz
    var correct = 0;
    var incorrect = 0;

    //Create click event for submit button
    $("#btn").click(){

    //Create conditional to determine if correct answer
    if(userChoice===qAndA[i].correctAnswer){


    }
    //Create timer

    //Create final page displaying score