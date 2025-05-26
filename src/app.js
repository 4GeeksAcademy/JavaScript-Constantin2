import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuse() {

    let who = Math.floor(Math.random() * 4) + 1;
    let whoText = "";
    if (who == 1) {

        whoText = "The dog"
    }
    if (who == 2) {
        whoText = "My grandma"
    }
    if (who == 3) {
        whoText = "The mailman"
    }
    if (who == 4) {
        whoText = "My bird"
    }


    let action = Math.floor(Math.random() * 4) + 1;
    let actionText = "";
    if (action == 1) {
        actionText = "ate"
    }
    if (action == 2) {
        actionText = "peed"
    }
    if (action == 3) {
        actionText = "crushed"
    }
    if (action == 4) {
        actionText = "broke"
    }
    let what = Math.floor(Math.random() * 3) + 1;
    let whatText = "";
    if (what == 1) {
        whatText = "my homework"
    }
    if (what == 2) {
        whatText = "my phone"
    }
    if (what == 3) {
        whatText = "the car"
    }

    let when = Math.floor(Math.random() * 5) + 1;
    let whenText = "";
    if (when == 1) {
        whenText = "before the class"
    }
    if (when == 2) {
        whenText = "when I was sleeping"
    }
    if (when == 3) {
        whenText = "while I was exercising"
    }
    if (when == 4) {
        whenText = "during my lunch"
    }
    if (when == 5) {
        whenText = "while I was praying"
    }

    return  (whoText + " " + actionText + " " + whatText + " " + whenText + " ");

}


let randomizer = excuse();
console.log(randomizer);

document.getElementById("excuse").innerHTML=randomizer
};
