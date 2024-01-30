let btn = document.getElementById("buttonLuke");
let container = document.querySelector("#container");

btn.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => {
            let h1 = document.createElement("h1");
            h1.textContent = data.name;
            container.appendChild(h1);

            let table = document.createElement("table");
            let stats = {
                "height": "Height",
                "mass": "Weight",
                "eye_color": "Eye Color",
                "hair_color": "Hair Color"
            };

            for (let stat in stats) {
                let tr = document.createElement("tr");

                let td1 = document.createElement("td");
                td1.style.border = "2px solid black";
                td1.textContent = stats[stat];

                let td2 = document.createElement("td");
                td2.style.border = "2px solid black";
                td2.textContent = data[stat];

                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
            }
            container.appendChild(table);
        })
        .catch(error => console.error(error));
});