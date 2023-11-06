"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 55;
score = '55';
var john = {
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
function getDbId(id) {
  if (typeof id === 'string') {
    return id.toLowerCase();
  }
  return id + 2;
}
// array
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, 2, 3, '4', true];
var seatAllotment;
seatAllotment = 'aisle';
