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
  protected _courseCount = 1;
  readonly city: string = 'Toronto';

  constructor(public email: string, public name: string) {}
  private deleteToken() {
    console.log('Token deleted');
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get couseCount(): number {
    return this._courseCount;
  }

  set courseCount(couseNum: number) {
    if (couseNum <= 1) {
      throw new Error('Course count should be more than 1');
    }
    this._courseCount = couseNum;
  }

  get getDeleteToken(): void {
    return this.deleteToken();
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const john = new User('john@example.com', 'John');
// console.log(john);
// console.log(john.getAppleEmail);
// console.log(john.getDeleteToken);
