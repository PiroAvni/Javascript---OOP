console.log("ES6 Classes - Coding Challenge")

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/



class Car2 {
    //constructor Methods == Constructor Functions
    constructor(make,speed,) {
     // Instance Properties
    this.make = make;
    this.speed = speed;
    }
    // Methods
    acc(){
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake(){
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    //Add a setter called 'speedUS' which sets the current speed in mi/h
    // 1. but converts it to km/h
    // 2. storing the value, by multiplying the input by 1.6);
    // created a setter for property that exist
    set speedUS(speed){
        this.speed  * 1.6;
    }
    //Add a getter called 'speedUS'
    // returns the current speed in mi/h (divide by 1.6)
    get speedUS(){
        return this.speed / 1.62;
        
    }
}

 // New instances created
 const ford= new Car2("Ford", 120);


console.log(ford);
//Method calls
console.log(ford.speedUS);
ford.acc();
ford.acc();
ford.brake();
//ford.speedUS = 50;
console.log(ford);
console.log(`FORD is going at ${ford.speedUS} miles`);
//console.log(ford.acc);



 // New instances created
const vw = new Car2('VW',95)
console.log(vw);
console.log(vw.speedUS);
//Method calls
vw.acc()
vw.brake()
console.log(`VM is going at ${vw.speedUS} miles`);