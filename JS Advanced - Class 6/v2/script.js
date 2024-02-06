let btn = document.getElementById("button");
let studentData = null;

function fetchData(action) {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json")
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (students) {
            console.log(students);

            switch (action) {
                case "higherThanThree":
                    higherThanThree(students);
                    break;
                case "femaleOverFive":
                    femaleOverFive(students);
                    break;
                case "maleOverEighteen":
                    maleOverEighteen(students);
                    break;
                case "femaleOverTwentyFourAverage":
                    femaleOverTwentyFourAverage(students);
                    break;
                case "maleB":
                    maleB(students);
                    break;
                default:
                    console.log("Invalid action.");
            }
        })
        .catch(function (error) {
            console.log(`The request has failed. Please try again. ${error}`);
        });
}

document.getElementById("button1").addEventListener("click", function () {
    fetchData("higherThanThree");
});

document.getElementById("button2").addEventListener("click", function () {
    fetchData("femaleOverFive");
});

document.getElementById("button3").addEventListener("click", function () {
    fetchData("maleOverEighteen");
});

document.getElementById("button4").addEventListener("click", function () {
    fetchData("femaleOverTwentyFourAverage");
});

document.getElementById("button5").addEventListener("click", function () {
    fetchData("maleB");
});

// document.getElementById("button1").addEventListener("click", function () {
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json")
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (students) {
//             console.log(students);

//             higherThanThree(students);
//         })
//         .catch(function (error) {
//             console.log(`The request has failed. Please try again. ${error}`);
//         })
// });

// document.getElementById("button2").addEventListener("click", function () {
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json")
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (students) {
//             console.log(students);

//             femaleOverFive(students);
//         })
//         .catch(function (error) {
//             console.log(`The request has failed. Please try again. ${error}`);
//         })
// });

// document.getElementById("button3").addEventListener("click", function () {
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json")
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (students) {
//             console.log(students);

//             maleOverEighteen(students);
//         })
//         .catch(function (error) {
//             console.log(`The request has failed. Please try again. ${error}`);
//         })
// });

// document.getElementById("button4").addEventListener("click", function () {
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json")
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (students) {
//             console.log(students);

//             femaleOverTwentyFourAverage(students);
//         })
//         .catch(function (error) {
//             console.log(`The request has failed. Please try again. ${error}`);
//         })
// });

// document.getElementById("button5").addEventListener("click", function () {
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G7/Class06/homework/students.json")
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (students) {
//             console.log(students);

//             maleB(students);
//         })
//         .catch(function (error) {
//             console.log(`The request has failed. Please try again. ${error}`);
//         })
// });

function higherThanThree(studentData) {
    let higherThanThree = studentData.filter(student => student.averageGrade > 3);
    let string = higherThanThree.map(student => `${student.firstName} ${student.lastName}: ${student.averageGrade}`);

    let container = document.getElementById("averageOver3");

    // console.log(higherThanThree);

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

    console.log(maleB);

    let container = document.getElementById("maleStartingB");
    let paragraph = document.createElement("p");
    container.appendChild(paragraph);
    paragraph.innerHTML = `Male students whose name starts with B and have an average grade of 2:<br>${maleBString}`;

    return maleB;
}