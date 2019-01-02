// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function() {
    console.log(2018- this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var peter = new Person('Peter', 1986, 'postie');
var mark = new Person('Mark', 1980, 'tradie');

console.log(john);
console.log(peter);
console.log(john.lastName);
console.log(peter.lastName);

john.calcAge();
peter.calcAge();
mark.calcAge();
*/
// Object.create

/*
var age = 28;
var obj = {
    name: 'Moe',
    city: 'Brisbane'
};

function change(a,b) {
    a = 24;
    b.city = 'Melbourne';
}

change(age, obj);

console.log(age);
console.log(obj.city);
console.log(test);
*/

/* - Lecture 65 - Passing functions as Arguments

var birthYear = [ 1986, 2013, 2015, 1988, 1990 ];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

//max heart rate for age
function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }

}

// Determines if the age is above 18
function isOfAge(element){
    return element >= 18;
}

// calculates age
function calcAge(element) {
    return 2018 - element;
}

var ages = arrayCalc(birthYear, calcAge);
var fullAge = arrayCalc(ages, isOfAge);
var heartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(heartRates);

*/

/* - Lecture 66 - Function Returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Moe');

interviewQuestion('wee')('JACK');

*/























