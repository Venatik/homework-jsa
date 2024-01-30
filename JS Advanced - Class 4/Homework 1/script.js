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