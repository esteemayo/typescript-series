function addTwo(num: number): number {
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

function getValue(myVal: number): boolean | string {
  if (myValue > 5) {
    return true;
  }
  return '200 OK';
}

getValue(1);

const getHello = (s: string): string => {
  return '';
};

const heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
