// Function constructor

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

