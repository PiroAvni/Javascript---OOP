// Inheritance Between "Classes": Constructor Functions

// Parent Classes
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Method
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

// Child Classes
// Inheritance Between "Classes":
const Student = function (firstName, birthYear, course) {
  Person.call(this,firstName, birthYear);
  this.course = course;
};

// Link the Child Classes to Parent Classes
Student.prototype = Object.create(Person.prototype);

//Method
Student.prototype.introduce = function () {
  console.log(`My name ${this.firstName} and I study ${this.course}`);
};

Student.prototype.constructor = Student;
// instances
const mike = new Student("Mike", 2020, "Computer Science ");


mike.introduce();
mike.calAge();

console.log(mike instanceof Student)
console.log(mike instanceof Person)
console.log(mike instanceof Object)

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
const gary = new Student("Gary", 2020, "Maths  ");
console.log(gary);

gary.introduce()
gary.calAge();
