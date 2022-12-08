console.log("Object.create - Inheritance")

// ! Parent Class
// Existing object
const PersonProto = {
    // Method
  calcAge() {
    console.log(2037 - this.birthYear);
  },
    //  method
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;

    }
};

// ! Child Class linked to Parent Class ( StudentProto === PersonProto )

// Creating a new object prototype called StudentProto
const StudentProto = Object.create(PersonProto);

// ! Child Class

StudentProto.init = function(firstName,birthYear,course){
    // ! Methods
    //  method re-use from the parent class prototype- set the 'this' keyword to the properties
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course;
}
    StudentProto.introduce = function(){
    console.log(`My Name is ${this.firstName} and I study ${this.course}`);
};

// Creating a new student objects in StudentProto 
const andy = Object.create(StudentProto);
andy.init("Andy Walker", 1992, "P.E")
andy.introduce()
andy.calcAge()
console.log(andy)


const jay=Object.create(StudentProto);
jay.init("Jay Walker", 1994, "History")
jay.introduce()
jay.calcAge()
console.log(jay);

