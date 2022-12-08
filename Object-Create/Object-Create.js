console.log("Object.create");
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// Syntax

/**
 *       Object.create(proto)
         Object.create(proto, propertiesObject)
 */

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
// Object.create creates a new object and the prototype of that object will be the object we passed in.
const steven = Object.create(PersonProto);
console.log(steven) // Empty Object

// Properties
steven.name = 'Steven';
steven.birthYear =1981;
steven.calcAge();
console.log(steven)

console.log(steven.__proto__ === PersonProto) // true

// new Object
const ian = Object.create(PersonProto);
 // Manually Initialized  
ian.init("Ian", 2031);
ian.calcAge();
console.log(ian)