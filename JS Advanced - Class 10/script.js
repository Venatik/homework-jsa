function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;

    this.printStudents = function () {
        console.log(this.students);
    }

    this.printSubjects = function () {
        console.log(this.subjects);
    }

    this.getNumberOfClasses = function () {
        return this.subjects.length * 10;
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;

    this.overrideClasses = function (number) {
        if (number >= 3) {
            this.numberOfClasses = number;
        } else {
            console.log(`The number of classes can't be smaller than 3.`);
        }
    }
}

function Students(firstName, lastName, age, completedSubjects, academy, currentSubject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = academy;
    this.currentSubject = currentSubject;

    this.startAcademy = function (newAcademy) {
        if (!this.academy) {
            this.academy = newAcademy;
            newAcademy.students.push(this);
            console.log(`The student ${this.firstName} ${this.lastName} has joined ${newAcademy.name} academy.`);
        } else {
            console.log(`Error: The student is already part of an academy.`);
        }
    }

    this.startSubject = function (newSubject) {
        if (this.academy) {
            if (this.currentSubject) {
                this.completedSubjects.push(this.currentSubject);
            }
            this.currentSubject = newSubject;
            newSubject.students.push(this);
            if (!this.academy.subjects.includes(newSubject)) {
                this.academy.subjects.push(newSubject);
            }
        }
    }
}

let academy1 = new Academy("QinShift", [], [], new Date(2023, 9, 1), new Date(2024, 9, 31));
console.log(`Academy1 log:`, academy1);

let subject1 = new Subject("JS", true, academy1, []);
console.log(`Subject1 log:`, subject1);

let subject2 = new Subject("HTML", true, academy1, []);

let student1 = new Students("Stefan", "Trajkovski", 34, [], null, null);
console.log(`Student1 log:`, student1);

student1.startAcademy(academy1);
student1.startSubject(subject1);
academy1.printStudents();
academy1.printSubjects();
console.log(academy1.getNumberOfClasses());
student1.startSubject(subject2);
console.log(`Student1 log:`, student1); // Current subject updated to HTML