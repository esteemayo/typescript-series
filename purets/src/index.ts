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
  readonly city: string = 'Toronto';
  constructor(public email: string, public name: string) {}
}

const john = new User('john@example.com', 'John');
console.log(john);
