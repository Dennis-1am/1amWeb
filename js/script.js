window.onload = function () {
    // write a message to the to the DOM make it slow and disappear when clicked
    let message = document.createElement("div");
    message.innerHTML = "Click to start";
    message.id = "message";
    // add the message starting from the bottom of the dom
    document.body.appendChild(message);
    // make the message appear slowly
    message.style.opacity = 0;
    setTimeout(function () {
        message.style.opacity = 1;
    }, 1000);
    // make the message disappear when clicked
    message.addEventListener("click", function () {
        message.style.opacity = 0;
        setTimeout(function () {
            message.remove();
        }, 1000);
    }
    );
};

document.addEventListener("mousemove", function (event) {

    // get the mouse position on the screen
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let pupil = document.getElementById("pupil");

    let pupilX = pupil.offsetLeft;
    let pupilY = pupil.offsetTop;

    let diffX = (mouseX - pupilX)*.1;
    let diffY = (mouseY - pupilY)*.1;

    // limit the movement of the pupil to within the eye
    if (diffX > 100) {
        diffX = 100;
    } else if (diffX < -100) {
        diffX = -100;
    }

    if (diffY > 30) {
        diffY = 30;
    } else if (diffY < -30) {
        diffY = -30;
    }

    pupil.style.transform = "translate(" + diffX + "px, " + diffY + "px)";

});


