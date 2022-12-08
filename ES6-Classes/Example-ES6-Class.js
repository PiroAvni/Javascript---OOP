console.log("Example - ES6 - Class");

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // Create many properties on instance that  are not based on any inputs
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }
  // Methods
  // public interface of our objects - (API)
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  // Internal method - hidden method
  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account("Avni", "USD", 1234);

console.log(acc1);
// ! Wrong - create a public interface - Method
// acc1.movements.push(250)
// acc1.movements.push(-50)
acc1.deposit(100);
acc1.withdraw(-50);
acc1.requestLoan(1000);
acc1.approveLoan(1000)
console.log(acc1);
console.log(acc1.pin);
