"use strict";
// class User {
//   public email: string;
//   private name: string;
//   private readonly city: string = 'Toronto';
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.city = 'Toronto';
  }
}
const john = new User('john@example.com', 'John');
console.log(john);
