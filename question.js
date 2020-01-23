function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {

    showQuestions(quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
};

function showResults(questions, quizContainer, resultsContainer){
        
}

var i = 0;

function showQuestions(quizContainer){
    quizContainer.innerHTML = "";
    
    var questionH3 = document.createElement("h3");
    questionH3.innerText = myQuestions[i].Question;
    quizContainer.append(questionH3)

        for(var j =0; j < myQuestions[i].Answers.length; j++){
            // "<button>" + myQuestions[i].Answers[j] + "</button>";
            var button = document.createElement("button");
            button.innerText = myQuestions[i].Answers[j];
            button.onclick = function(event){
                console.log(event.target)
                var userAnswer = event.target.innerText;
                var correctAnswer = myQuestions[i].correctAnswer;
                if(userAnswer === correctAnswer){
                    console.log("correct!")
                } else {
                    console.log(" wrong!")
                }
                //right or wrong
                //change color
                //go to the next question

                //this bit can go in onclick for next question button
                    //if there even is a next question
                    i++;
                    showQuestions(quizContainer)
                    //else end the game, show your score
            }
            quizContainer.append(button)
        }
    
    
    // quizContainer.innerHTML = output.join('');
}

var myQuestions = [
    {
        Question: "Who is the greatest band in the World?",
        Answers: [
            'Pink Floyd',
           'Led Zeppelin',
            'The Jimi Hendrix Experience',
            'All of the Above!'
        ],
        correctAnswer: 'All of the Above!'
    },
    {
        Question: "Who is the greatest basketball team in the World?",
        Answers: [
            'Dallas Mavvericks',
           'San Antonio Spurs',
            'Houston Rockets'
        ],
        correctAnswer: 'Dallas Mavvericks'
    }
];

var quizContainer = document.getElementById('quiz');
console.log(quizContainer)
var resultsContainer = document.getElementById('results');
console.log(resultsContainer)
var submitButton = document.getElementById('submit');
var nextButton = document.getElementById('next');

nextButton.onclick = function(){}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);