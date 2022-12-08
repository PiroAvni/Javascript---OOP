console.log("ES6-Classes - - STATIC METHODS")

// Class Expressions
/* const PersonCl = class{
    
} */

// Class Declarations

class PersonCLSM {
  //constructor Methods == Constructor Functions
  constructor(fullName, birthYear) {
    // property
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
    // instance Methods
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
  // Static Methods
  // Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.
  static hey (){
    console.log("This is a static method");
    console.log(this);
  }

}
// Instance PersonCLSM 
const jeyan = new PersonCLSM ("Jeyan Piro", 1981);
console.log(jeyan);
jessica.calAge();
console.log(jeyan.age);
jeyan.hello();

console.log(jessica.__proto__ === PersonCLSM .prototype); // true


const cenel = new PersonCLSM ("Cenel Piro", 1981);
// Method
PersonCLSM.prototype.greet = function () {
  console.log(`Hey ${this._fullName}`);
};
cenel.greet();
PersonCLSM.hey();