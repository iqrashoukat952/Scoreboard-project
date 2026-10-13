const aCounter = document.getElementById("acounter");
const bCounter = document.getElementById("bcounter");
const a1Inc = document.getElementById("a1inc");
const a2Inc = document.getElementById("a2inc");
const a3Inc = document.getElementById("a3inc");
const b1Inc = document.getElementById("b1inc");
const b2Inc = document.getElementById("b2inc");
const b3Inc = document.getElementById("b3inc");

const resetBtn = document.getElementById("Reset")

let teamAScore = 0;
let teamBScore = 0;
function addPointToA(points) {
    teamAScore += points
    aCounter.textContent = teamAScore;
}
function addPointToB(points) {
    teamBScore += points
    bCounter.textContent = teamBScore;
}
function reset() {
    teamAScore = 0;
    teamBScore = 0;
    aCounter.textContent = teamAScore;
    bCounter.textContent = teamBScore;

}

resetBtn.addEventListener("click", reset);
a1Inc.addEventListener("click", () => addPointToA(1));
a2Inc.addEventListener("click", () => addPointToA(2));
a3Inc.addEventListener("click", () => addPointToA(3));

b1Inc.addEventListener("click", () => addPointToB(1));
b2Inc.addEventListener("click", () => addPointToB(2));
b3Inc.addEventListener("click", () => addPointToB(3));
