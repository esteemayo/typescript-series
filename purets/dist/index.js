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
    this._courseCount = 1;
    this.city = 'Toronto';
  }
  deleteToken() {
    console.log('Token deleted');
  }
  get getAppleEmail() {
    return `apple${this.email}`;
  }
  get couseCount() {
    return this._courseCount;
  }
  set courseCount(couseNum) {
    if (couseNum <= 1) {
      throw new Error('Course count should be more than 1');
    }
    this._courseCount = couseNum;
  }
  get getDeleteToken() {
    return this.deleteToken();
  }
}
class SubUser extends User {
  constructor() {
    super(...arguments);
    this.isFamily = true;
  }
  changeCourseCount() {
    this._courseCount = 4;
  }
}
const john = new User('john@example.com', 'John');
// console.log(john);
// console.log(john.getAppleEmail);
// console.log(john.getDeleteToken);
