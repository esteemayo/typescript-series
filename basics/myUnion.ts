let score: number | string = 33;

score = 55;

score = '55';

type User = {
  id: number;
  name: string;
};

type Admin = {
  id: number;
  username: string;
};

let john: User | Admin = {
  id: 1,
  name: 'John',
};

john = {
  id: 1,
  username: 'j',
};

// function getDbId(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId('3');

function getDbId(id: number | string) {
  if (typeof id === 'string') {
    return id.toLowerCase();
  }
  return id + 2;
}

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: (number | string | boolean)[] = [1, 2, 3, '4', true];

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'aisle';
// seatAllotment = 'crew'

export {};
