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


///////////////////////////////////////
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


///////////////////////////////////////
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



///////////////////////////////////////
// IIFE - Immediateky Invoked Function Expressions - Lecture 67

/*

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IIFE example
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

*/

///////////////////////////////////////
// Closures - Lecture 68
 
/*

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementDE = retirement(65);
var retireIceland = retirement(67);

retirementDE(1986);
retirementUS(1986);
retireIceland(1986);

*/

// retirement(66)(1990);

/*
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
*/

/*
function interviewQuestion(job) {
    return function(name) {
        switch (job) {
            case 'designer': console.log(name + ', can you please explain what UX design is?');
                break;
            case 'teacher': console.log(name + ', What subject do you teach?');
                break;
            default: console.log('Hello ' + name + ', what do you do?');
                break;
        }
    }
}

interviewQuestion('teach')('Moe');

*/

///////////////////////////////////////
// Bind, Call and Apply - Lecture 69

/* 

//john object
var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' 
            + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age
            + ' years old.' );
        } else if (style === 'friendly') {
            console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age
            + ' years old. have a nice ' + timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


john.presentation('formal', 'morning');
john.presentation('friendly', 'afternoon');

// substitutes another object to be used in the method
john.presentation.call(emily, 'friendly', 'afternoon');

// can supply the arguments to a called function (in an array) using another object
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// binds the function to a variable.
emily.pres = john.presentation.bind(emily, 'friendly', 'day');

emily.pres();


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

// calculates age
function calcAge(element) {
    return 2018 - element;
}

// Determines if the age is above 18
function isOfAge(limit, element){
    return element >= limit;
}


var ages = arrayCalc(birthYear, calcAge);

var fullJapan = arrayCalc(ages, isOfAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);

*/














