document.querySelector(".control-buttons span").onclick = function () {
    let person = prompt("What's Your Name");
    if (person === null || person === "") {
        document.querySelector(".info-container span").innerHTML = "Unknown";
    } else {
        document.querySelector(".info-container span").innerHTML = person;
    }
    document.querySelector(".control-buttons").remove();
}

let boxes = document.querySelectorAll(".container span").forEach((box) => {
    box.addEventListener("click", function () {
        if (player = "Player One") {
            box.innerHTML = "X";
        } else {
            box.innerHTML = "O";
        }
    })
})