console.log('Getters & Setters')

const account = {
    owner:'Jonas',
    movement:[200,300,500,120],

// Getters - get the latest movement value
   get latest(){
    return this.movement.slice(-1).pop();
   },
   // Setters - set the latest movement value // 50
   set latest (mov) {
    this.movement.push(mov)
   }


}
console.log(account.latest); // 120

account.latest =50
console.log(account.movement) // [200,300,500,120,50]
account.latest =1000
console.log(account.movement) // [200,300,500,120,50,1000]
console.log(account.latest); // 1000