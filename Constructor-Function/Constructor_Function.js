'use strict';
  // *!  Constructor Function
 const Person = function(firstName, birthYear){
     // Instance Properties
 this.firstName = firstName;
 this.birthYear = birthYear;

/** ?
 * ! Never do this - Never create Methods with in side a Constructor Function
 
     // Methods 
    this.calAge =function(){
        console.log(2022 - this.birthName)
    };
 */

 };
     // function call -  Create a 'new' Object -An Instance of Person
 const avni  = new Person('Avni', 1991);
 console.log(avni) // FirstName:Avni, BirthYear: 1981

 console.log(avni instanceof Person); // True

 // *! Steps - Behind the scenes

 // 1. Empty Object created
 // 2. function is called , this  keyword = {} points the the object created
 // 3. {} new empty object linked to prototype - ie. Person.Prototype
 // 4. function automatically return {}


 // new instances created
 const matilda = new Person('Matilda', 2017);
 const jack = new Person('Jack', 1975);

 // Prototypes - 
 // Every Function in JS including Constructor Function have access to Prototypes.

 console.log(Person.prototype)

 // Setting Methods on the Person Constructor Functions 
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
 // *! METHODS
 // Method Call On the object
 avni.calcAge();

 jack.calcAge();
 matilda.calcAge();

 console.log(avni.__proto__);

 // The prototype of the Avni object is the prototype property of the Person Constructor Function!!!
 console.log(avni.__proto__ === Person.prototype) // true

 console.log(Person.prototype.isPrototypeOf(avni)) // true

// .prototypeOfLinkedObjects

// *! PROPERTIES
// Setting Properties on the prototype
Person.prototype.species = "Homo Sapiens";
    console.log(avni,matilda);
    console.log(avni.species,matilda.species);
    console.log(avni.species,avni.birthYear);

    // Properties created outside of the constructor function are not in the original object
    console.log(avni.hasOwnProperty('firstName')) // True
    console.log(avni.hasOwnProperty('species')) // False

// Prototype Chain
console.log(avni.__proto__) // prototype of avni object
// Object.prototype (top of the prototype chain)
console.log(avni.__proto__.__proto__) // prototype  property of object
console.log(avni.__proto__.__proto__.__proto__) // null

console.log(Person.prototype.constructor)

// Person.hey = function () {
//     console.log('Hey there 👋');
//     console.log(this);
//   };
//   Person.hey();

console.log("Array constructor")

const  arr = [3,6,4,6,6,9,6,9,6]; // same as new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

// Array -

// Creating an Array Method 
// Creating a unique method to return all the unique value from an array
Array.prototype.unique = function(){
    return [...new Set (this)];
};
console.log(arr.unique())

// Built in Object 

// DOM

const h1 = document.createElement('h1');
console.dir(x=>x+1);

