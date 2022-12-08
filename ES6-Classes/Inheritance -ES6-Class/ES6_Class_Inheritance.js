console.log("ES6 - Class - Inheritance");


  // *!  Parent Class
class PersonCl {
    //constructor Methods == Constructor Functions
    constructor(fullName, birthYear) {
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
    // Static Method
    static hey() {
        console.log("Hey there!");
    }
  }
  
 
   // *!  Child Class
  
  // Child Class - Inheritance from Parent Class (PersonCl) using "extends" Keyword
  class StudentCl extends PersonCl {
    // Constructor Method is still needed
    constructor(fullName,birthYear, course){
        // Needs to happen first! - Super create the 'this' keyword for this subclass
        // Super is needed with parameter of the parent class constructor
      super(fullName,birthYear)  
      this.course =course;
    }
    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
    }
    // This method override the method in the prototype chain (It appears first in the prototype chain first)
    calAge(){
        console.log(`I'm  ${2037 -this.birthYear} years old, but as a student I feel more like ${2037-this.birthYear +10}`);
    }
  }
  const paul = new StudentCl('Paul Jones', 1999,'Maths');
  paul.introduce();
  paul.calAge();