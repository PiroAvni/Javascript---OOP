console.log("Encapsulation - Private Class Fields and Methods");

// !  1) Public fields
//  Class fields are public by default

// ! 2) Private fields
// private class members can be
// created by using a hash # prefix

// ! 3) Public methods
// Class fields are public by default

// ! 4) Private methods
// created by using a hash # prefix

// (there is also the static versions)


class Account {
  // 1) Public Fields - (Instances)
  locale = navigator.language;
  // _movements = []; //Protected using underscore _

  // 2) Private Fields - (Instances)
  #movements = []; // Protected using underscore the new (# symbol
  #pin; // defined outside the constructor with no value .

  constructor(owner, currency, pin) {
    // initializing an object created with a class
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // Can not define a private field within the constructor method and have to be defined outside the constructor first with no value, then redefine in constructor method .

    // Create many properties on instance that  are not based on any inputs
    // this._movements = []; //Protected using underscore _
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }
  // 3) Public methods
  // public interface of our objects - (API)

  getMovements() {
    // We can use 'get' and 'set' methods
    return this.#movements;
  }
  deposit(val) {
    //this._movements.push(val); // Protected
    this.#movements.push(val); // New symbol for protected and private members
  }
  withdraw(val) {
    this.deposit(-val);
  }
  // Internal method - hidden method
  //   _approveLoan(val) {
  //     return true;
  //   }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
   // ! Static Public method
  static helper(){
    console.log('Helper Function - Static Method will NOT be available on all the instances, but only on the class itself!');
  }

  // 4) Private methods
  // Internal method - hidden method
  // _approveLoan(val)
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Avni", "GBP", 1234);

console.log(acc1);
// ! Wrong - create a public interface - Method
// Private Properties
// acc1._movements.push(250)
// acc1._movements.push(-50)
console.log(acc1);
acc1.deposit(100);
acc1.withdraw(-50);
acc1.requestLoan(1000);
//acc1.approveLoan(1000) // private method
acc1.deposit(1400);
console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1._pin); Private property

// console.log(acc1.#movements) // Error Private Field
// console.log(acc1.#pin) // Error Private Field
Account.helper();