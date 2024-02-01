let btn = document.getElementById("button");
let studentData = null;

btn.addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json")
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (students) {
            console.log(students);
            studentData = students;

            higherThanThree(studentData);
            femaleOverFive(studentData);
            maleOverEighteen(studentData);
            femaleOverTwentyFourAverage(studentData);
            maleB(studentData);
        })
        .catch(function (error) {
            console.log(`The request has failed. Please try again. ${error}`);
        })
});

function higherThanThree(studentData) {
    let higherThanThree = studentData.filter(student => student.averageGrade > 3);
    let string = higherThanThree.map(student => `${student.firstName} ${student.lastName}: ${student.averageGrade}`);

    // console.log(higherThanThree);

    let container = document.getElementById("averageOver3");
    let paragraph = document.createElement("p");
    container.appendChild(paragraph);
    paragraph.innerHTML = string.join("<br>");

    return higherThanThree;
}

function femaleOverFive(studentData) {
    let femaleOverFive = studentData.filter(student => student.gender === "Female" && student.averageGrade >= 5)
        .map(student => `${student.firstName} ${student.lastName}: ${student.averageGrade}`);

    console.log(femaleOverFive);

    let container = document.getElementById("femaleAverageOver5");
    let paragraph = document.createElement("p");
    container.appendChild(paragraph);
    paragraph.innerHTML = femaleOverFive.join("<br>");

    return femaleOverFive;
}

function maleOverEighteen(studentData) {
    let maleOver18 = studentData.filter(student => student.age > 18 && student.gender === "Male" && student.city === "Skopje")
        .map(student => `${student.firstName} ${student.lastName}: ${student.age}`);

    console.log(maleOver18);

    let container = document.getElementById("maleSkopje");
    let paragraph = document.createElement("p");
    container.appendChild(paragraph);
    paragraph.innerHTML = maleOver18.join("<br>");

    return maleOver18;
}

function femaleOverTwentyFourAverage(studentData) {
    let femaleOver24 = studentData.filter(student => student.gender === "Female" && student.age > 24)
    let femaleOver24Average = femaleOver24.reduce((sum, student) => sum + student.averageGrade, 0) / femaleOver24.length;

    // console.log(femaleOver24Average.toFixed(2)); 

    let container = document.getElementById("femaleOver24");
    let paragraph = document.createElement("p");
    container.appendChild(paragraph);
    paragraph.innerHTML = `The average of all female students over the age of 24 is: ${femaleOver24Average.toFixed(2)}`;

    return femaleOver24;
}

function maleB(studentData) {
    let maleB = studentData.filter(student => student.gender === "Male" && student.firstName.startsWith("B") && student.averageGrade > 2);
    let maleBString = maleB.map(student => `${student.firstName} ${student.lastName}: ${student.averageGrade}`).join("<br>");

    // console.log(maleB);

    let container = document.getElementById("maleStartingB");
    let paragraph = document.createElement("p");
    container.appendChild(paragraph);
    paragraph.innerHTML = `Male students whose name starts with B and have an average grade of 2:<br>${maleBString}`;

    return maleB;
}