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

console.log(qAndA.property);

//Create main quiz function
function buildQuiz () {

//Create loop to cycle through questions and create quiz
for (var i = 0; i < qAndA.length; i++) {

    console.log(qAndA.question);

};
};