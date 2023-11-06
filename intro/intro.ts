export {};

type User = {
  name: string;
  age: number;
  email?: string;
};

const user: User = {
  name: 'John',
  age: 18,
};

console.log('John');
console.log(user.name);
console.log(user.email);
