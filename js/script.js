window.onload = function () {
    printMsg("Hello, I'm a non-intellegient assistance bot. I'm here to help you learn more about Dennis. Would you like to learn more about Dennis?");
    loadOptions(["Yes", "No"]);
}

document.addEventListener("mousemove", function (event) {

    // get the mouse position on the screen
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let pupil = document.getElementById("pupil");
    // get the position of the pupil
    let pupilX = pupil.offsetLeft;
    let pupilY = pupil.offsetTop;

    // calculate the difference between the mouse position and the pupil position
    let diffX = (mouseX - pupilX) * .1; // multiply by .1 to slow down the movement
    let diffY = (mouseY - pupilY) * .1;

    // limit the movement of the pupil to within the eye
    if (diffX > 150) {
        diffX = 150;
    } else if (diffX < -150) {
        diffX = -150;
    }

    if (diffY > 30) {
        diffY = 30;
    } else if (diffY < -30) {
        diffY = -30;
    }

    pupil.style.transform = "translate(" + diffX + "px, " + diffY + "px)";

});

document.getElementById("msgbox").addEventListener("mouseover", function () {
    changeColor();
    document.getElementById("msgbox").addEventListener("mouseout", function () {
        resetColor();
    });
});

document.getElementsByClassName("options")[0].addEventListener("mouseover", function () {
    changeColor();
    document.getElementsByClassName("options")[0].addEventListener("mouseout", function () {
        resetColor();
    });
});

document.getElementsByClassName("options")[1].addEventListener("mouseover", function () {
    changeColor();
    document.getElementsByClassName("options")[1].addEventListener("mouseout", function () {
        resetColor();
    });
});

function changeColor() {
    let pupil = document.getElementById("pupil");
    let iris = document.getElementById("iris");
    pupil.style.backgroundColor = "red";
    pupil.style.padding = "2rem";
    iris.style.padding = "1rem";
}

function resetColor() {
    let pupil = document.getElementById("pupil");
    let iris = document.getElementById("iris");
    pupil.style.backgroundColor = "black";
    pupil.style.padding = "3rem";
    iris.style.padding = "1rem";
}

function printMsg(msg) {
    let msgbox = document.getElementById("msgbox");
    let i = 0;
    let timer = setInterval(function () {
        if (i < msg.length) {
            msgbox.innerHTML += msg.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 35);
}

function loadOptions(textList){ // textList is an array of strings in this case yes and no
    let optionlist = document.getElementsByClassName("options");
    let i = 0; // index of the optionList
    let j = 0; // index of the word
    let timer = setInterval(function () {
        if(i < optionlist.length && j < textList[i].length){
            optionlist[i].innerHTML += textList[i][j];
            j++;
        } else if(i < optionlist.length && j >= textList[i].length){
            i++;
            j = 0;
        } else {
            clearInterval(timer);
        }
    }
    , 100);
}