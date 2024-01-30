// Exercise 1

function getDigits(num) {
    return Math.abs(num).toString().length;
}

function isOddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

function isPositiveOrNegative(num) {
    return num >= 0 ? "Positive" : "Negative";
}

function getStats(num) {
    console.log(`The number contains: ${getDigits(num)} digits, is ${isOddOrEven(num)}, and ${isPositiveOrNegative(num)}.`);
}

getStats(-426);


// Exercise 2

let textSizeInput = document.getElementById("textSize");
let colorInput = document.getElementById("color");
let btn = document.getElementById("changeBtn");
let header = document.getElementById("header");

let changeColor = (element, color = "black") => {
    element.style.color = color;
}

let changeTextSize = (element, textSize = "24px") => {
    element.style.fontSize = textSize + "px";
}

btn.addEventListener("click", () => {
    changeTextSize(header, textSizeInput.value);
    changeColor(header, colorInput.value);

    textSizeInput.value = "";
    colorInput.value = "";
});


// Homework 1

document.addEventListener("DOMContentLoaded", function () {
    let displayBtn = document.getElementById("displayPlanets");
    let nextBtn = document.getElementById("nextButton");
    let prevBtn = document.getElementById("prevButton");

    let fetchPlanets = url => {
        return fetch(url)
            .then(response => response.json())
            .then(data => data.results);
    }

    let displayPlanets = (planets) => {
        let tableBody = document.getElementById("planets").getElementsByTagName("tbody")[0];
        tableBody.innerHTML = "";

        planets.forEach(planet => {
            let row = tableBody.insertRow();
            row.insertCell(0).innerHTML = planet.name;
            row.insertCell(1).innerHTML = planet.population;
            row.insertCell(2).innerHTML = planet.climate;
            row.insertCell(3).innerHTML = planet.gravity;
        });
    }

    displayBtn.addEventListener("click", () => {
        fetchPlanets("https://swapi.dev/api/planets/?page=1")
            .then(planets => {
                displayPlanets(planets);
                nextBtn.classList.remove("hide");
            });
    });

    nextBtn.addEventListener("click", () => {
        fetchPlanets("https://swapi.dev/api/planets/?page=2")
            .then(planets => {
                displayPlanets(planets);
                nextBtn.classList.add("hide");
                prevBtn.classList.remove("hide");
            });
    });

    prevBtn.addEventListener("click", () => {
        fetchPlanets("https://swapi.dev/api/planets/?page=1")
            .then(planets => {
                displayPlanets(planets);
                prevBtn.classList.add("hide");
                nextBtn.classList.remove("hide");
            });
    });
});