let expblock = document.getElementsByClassName("exp-block");
let summary = document.getElementsByClassName("Summary");
let skills = document.getElementsByClassName("Skills");

let exptitles = ["Relay Networks", "Lehigh University", "Signet Jewelers"];

for(let i = 0; i < expblock.length; i++) {
    // styling
    let experience = expblock[i]
    experience.style.background = "blue";
    experience.style.color = "white";
    experience.style.padding = "5px";
    experience.style.borderRadius = "15px";
    experience.style.border = "5px solid black";
    experience.style.boxShadow = "20px 38px 34px -26px #888888";
    // event listener for mouseover and mouseout
    experience.addEventListener("mouseover", function() {
        experience.style.background = "white";
        experience.style.color = "black";
        experience.style.boxShadow = "2px 8px 4px -6px #888888";
    });

    experience.addEventListener("mouseleave", function() {
        experience.style.background = "blue";
        experience.style.color = "white";
        for(let j = 0; j < exptitles.length; j++) {
            summary[j].style.display = "none";
            skills[j].style.display = "none";
            experience.style.boxShadow = "20px 38px 34px -26px #888888";
        }
    });

    // event listener for click
    experience.addEventListener("click", function() {
        let title = experience.children[0].innerHTML;
        for(let j = 0; j < exptitles.length; j++) {
            if(title == exptitles[j]) {
                summary[j].style.display = "block";
                skills[j].style.display = "block";
            }
        }
    });
}

let navblock = document.getElementsByClassName("nav-block");
for(let i = 0; i < navblock.length; i++){
    navblock[i].addEventListener("mouseover", function() {
        navblock[i].style.color = "blue";
    });

    navblock[i].addEventListener("mouseleave", function() {
        navblock[i].style.color = "black";
    } );
}

// track mouse position on page and display in console
document.addEventListener("mousemove", function(event) {
    
});


