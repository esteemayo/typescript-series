let user: [string, number, boolean];

user = ['john', 1, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, 'test@example.com'];

newUser[1] = 'john@example.com';
// newUser.push(true); // error

export {};
