console.log("Static Method - Constructor Function")


'use strict';
  // *!  Constructor Function
 const PersonSM = function(firstName, birthYear){
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
 const emma= new PersonSM('Emma', 1991);
 console.log(emma) // FirstName:Avni, BirthYear: 1981

 console.log(emma instanceof Person); // True

 // Static Methods - not part of the main prototype chain
 PersonSM.hey = function(){
    console.log('Hello!');
 };
 PersonSM.hey();