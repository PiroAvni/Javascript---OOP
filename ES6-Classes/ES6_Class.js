console.log("ES6-Classes");

// Class Expressions
/* const PersonCl = class{
    
} */

// Class Declarations

class PersonCl {
  //constructor Methods == Constructor Functions
  constructor(fullName, birthYear) { //initializing an object created with a class
    // property
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Method will added to .prototype property
  calAge() {
    console.log(2037 - this.birthYear);
  }
  hello() {
    console.log("wHATS UP");
  }
  // We can add getters and setters as method in classes
  get age() {
    return 2037 - this.birthYear;
  }

  // created a setter for property that exist
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a fullName!`);
  }
  // create a getter the fullName property - Set a Property that already exists
  get fullName() {
    return this._fullName;
  }
}

// Instance PersonCl
const jessica = new PersonCl("Jessica Davies", 1981);
console.log(jessica);
jessica.calAge();
console.log(jessica.age);
jessica.hello();

console.log(jessica.__proto__ === PersonCl.prototype); // true


const emrah = new PersonCl("Emrah Piro", 1981);
// Method
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();
