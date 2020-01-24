var highscoreInput = document.querySelector("#highscore-text");
var highscoreForm = document.querySelector("#highscore-form");
var highscoreList = document.querySelector("#highscore-list");
var highscoreCount = document.querySelector("#highscore-count");

var highscore = [];

init();

function renderHighscore(highScores) {


    console.log(highScores)

    for (var i = 0; i < highScores.length; i++){
        var highscore = highScores[i];
        var li = document.createElement("li");
        li.textContent = highscore.initials;
        li.setAttribute("data-index", i);
        highscoreCount.append(li);
    }
}

function init() {
    var storedHighscore = JSON.parse(localStorage.getItem("highscore"));
/* 
 [
    {
        initials: "jf"
        score: 100
    },
    {

    }
 ]


 {
     initials: "jf"
     scores: [100, 33, 55]
 }
*/


    if(highscore !==null) {
        highscore = storedHighscore;
    }
    renderHighscore(storedHighscore);
}

function storeHighscore() {
    localStorage.setItem("highscore", JSON.stringify(highscore));
}

highscoreForm.addEventListener("submit", function(event) {
    ErrorEvent.preventDefault();
    var highscoreText = highscoreInput.value. trim();
    if (highscoreText === "") {
        return;
    }

    highscore.push(highscoreText);
    highscoreInput.value = ""
    storehighscore();
    renderHighscore();
});

highscoreList.addEventListener("click", function(event) {
    var element = event.target;
    if(element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
            highscore.splice(index, 1);
            storeHighscore();
            renderHighscore();
    }
});
