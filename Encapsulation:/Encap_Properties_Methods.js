console.log("Encapsulation - Properties & Methods")

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    // Create many properties on instance that  are not based on any inputs
    this._pin = pin;
    this._movements = []; //Protected using underscore _
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }
  // Methods
  // public interface of our objects - (API)
  getMovements(){
    return this._movements
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  // Internal method - hidden method
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account("Avni", "GBP", 1234);

console.log(acc1);
// ! Wrong - create a public interface - Method
    // Private Properties \                                     /
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