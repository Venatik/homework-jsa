function display(value) {
    let resultCalc = document.getElementById("resultCalc");
    resultCalc.value += value;
}

function solve() {
    let x = document.getElementById("resultCalc").value;
    let y = eval(x);
    document.getElementById("resultCalc").value = y;
    return y;
}

function clearScreen() {
    document.getElementById("resultCalc").value = "";
}

window.onload = function () {
    document.querySelectorAll(".calcDigit").forEach(item => {
        item.addEventListener("click", event => {
            display(item.textContent);
        })
    });
}

document.getElementById("calcClear").addEventListener("click", clearScreen);
document.querySelector("#calcSolve").addEventListener("click", solve);