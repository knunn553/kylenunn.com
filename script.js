
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



// Working with W3Schools.com



// Mini-project: try() and catch()
//function myFunction() {
//    const message = document.getElementById("p01");
//    message.innerHTML = "";
//    let x = document.getElementById("demo").value;
//    try {
//        if (x.trim() == "") throw "empty";
//        if (isNaN(x)) throw "not a number";
//        x = Number(x);
//        if (x < 5) throw "too low";
//        if (x > 10) throw "too high";
//    }
//    catch (er) {
//        message.innerHTML = "The entered value is " + er; 
//    }

//}


//const person = {
//    firstname: "Kyle",
//    lastname: "Nunn",
//    id: 3232,
//    fullname : function() {
//        return this.firstname + " " + this.lastname;
//    }
//};

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.fullName();


































