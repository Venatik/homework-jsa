/* # Exercises
## Exercise 1
Create 3 object templates. Academy, Student and Subject. The structure should be:
Academy
* Name - string
* Students - array of Students
* Subjects - array of Subjects
* Start - Date when it starts
* End - Date when it ends
* NumberOfClasses - number of subjects * 10, not settable
* PrintStudents - method that prints all students in console
* PrintSubjects - method that prints all subjects in console

Subject
* Title - string
* NumberOfClasses - default 10, not settable
* isElective - boolean
* Academy - Academy object
* Students - array of Students
* OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

Student
* FirstName - string
* LastName - string
* Age - number
* CompletedSubjects - emptyArray as default, not settable
* Academy - null as default, not settable 
* CurrentSubject - null as default, not settable
* StartAcademy - accepts Academy object that it sets to the Academy property of the student
* StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

## Exercise 2
Make the functions StartAcademy and StartSubject dynamic.
* StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
* StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject */

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

let student1 = new Students("Stefan", "Trajkovski", 34, [], null, null);
console.log(`Student1 log:`, student1);

student1.startAcademy(academy1);
student1.startSubject(subject1);
academy1.printStudents();
academy1.printSubjects();
console.log(academy1.getNumberOfClasses());