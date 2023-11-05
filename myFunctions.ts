function addTwo(num: number) {
  return num + 2;
}

const myValue = addTwo(5);
console.log(myValue);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper('john');

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser('John', 'john@example.com', false);

const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser('John', 'john@example.com');

export {};
