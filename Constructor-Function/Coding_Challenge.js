console.log("Construction Function - Coding Challenge")

console.log('Challenge')
// Challenge
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

const Car = function(make,speed){
    // Instance Properties
    this.make = make;
    this.speed = speed;
}
    // Methods
Car.prototype.acc = function () {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  Car.prototype.brake = function () {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

 // New instances created
const bmw  = new Car('BMW', 120);
//Method calls
bmw.acc()
bmw.brake()

 // New instances created
const Mercedes = new Car('Mercedes',95)
//Method callsB
Mercedes.acc()
Mercedes.brake()