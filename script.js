
"use strict";



//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}







var items = document.querySelectorAll('.timeline li');

function elementInView(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

function callBack() {
    for (var i = 0; i < items.length; i++) {
        if (elementInView(items[i])) {
            items[i].classList.add("in-view")
        }
    }
}

window.onload = callBack;
window.onresize = callBack;
window.onscroll = callBack;



// Quiz Functions



//function submitFunction() {

//    let yankees = document.getElementById("yankees");
//    let cardinals = document.getElementById("cardinals");
//    let rays = document.getElementById("rays");
//    let redsox = document.getElementById("redsox");


//    if (yankees.checked == true) {
//        document.getElementById("submitButton").innerHTML = "Correct!";
//    }
//    else {
//        document.getElementById("submitButton").innerHTML = "Wrong!";
//    }

//}


//// Making quiz form appear after user selects Start Quiz
//function quizAppear() {
//    if (startbutton.onclick == false) {
//        document.getElementById("quizform").style.display = "none";
//    }
//    else (startbutton.onclick == true){
//        document.getElementById("quizform").style.display = "block";
//    }
//}



const startButton = document.getElementById("start-btn")
// We are passing the id into a variable JS can understand
// Then we can add an event listener to the newly created variable and tell it to run quizAppear() function once it's clicked, or on click.
startButton.addEventListener(onclick, quizAppear)


// Essentially what we want to do with the start button once it is clicked is hide it.
function quizAppear() {

}

// We also need a function that is going to show the next question when we click on the 'next' button.
function nextQuestion() {

}

// We also need a function that is going to do something when we select an answer
function selectAnswer() {

}



















































