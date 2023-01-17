let expblock = document.getElementsByClassName("exp-block");
let summary = document.getElementsByClassName("Summary");
let skills = document.getElementsByClassName("Skills");

let exptitles = ["Relay Networks", "Lehigh University", "Signet Jewelers"];

for(let i = 0; i < expblock.length; i++) {
    // styling
    let experience = expblock[i]
    experience.style.background = "blue";
    experience.style.color = "white";
    experience.style.padding = "10px";
    experience.style.borderRadius = "20px";
    experience.style.border = "10px solid white";
    experience.style.boxShadow = "0px 5px 5px #888888";
    // event listener for mouseover and mouseout
    experience.addEventListener("mouseover", function() {
        experience.style.background = "white";
        experience.style.color = "black";1
    });

    experience.addEventListener("mouseleave", function() {
        experience.style.background = "blue";
        experience.style.color = "white";
        for(let j = 0; j < exptitles.length; j++) {
            summary[j].style.display = "none";
            skills[j].style.display = "none";
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