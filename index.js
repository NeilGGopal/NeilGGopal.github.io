const noButton = document.getElementById("no-button")
const noButtonAnchor = document.getElementById("no-button-anchor")
let count = 0;
let padding = 3;

noButton.addEventListener("click", function() {
    if (count == 0) {
        noButton.innerText = "Please reconsider!"
    } else if (count == 1) {
        noButton.innerText = "Why are you saying no?"
    } else if (count == 2) {
        noButton.innerText = "..."
    } else if (count == 3) {
        noButton.innerText = "Stop saying no!"
    } else if (count == 4) {
        noButton.innerText = "Simren please!"
    } else if (count == 5) {
        noButton.innerText = "Pretty please?"
    } else if (count == 6) {
        noButton.innerText = "I'll buy us a cat!"
    } else if (count == 7) {
        noButton.innerText = "Alright, two cats!"
    } else if (count == 8) {
        noButton.innerText = "..."
    } else if (count == 9) {
        noButton.innerText = "Okay, I see how it is. Fine! You've forced my final option..."
    } else if (count == 10) {
        noButton.innerText = "I know how to change this text! Which means..."
    } else if (count == 11) {
        noButton.innerText = "Yes but in red"
        noButton.style.color = "#DC362D"
    } else {
        noButtonAnchor.href = "index_2.html"
        window.location.href = "https://neilggopal.github.io/index_2.html"
    }
    count += 1;
    padding += 1;
    noButton.style.padding = "" + padding + "vh";
})