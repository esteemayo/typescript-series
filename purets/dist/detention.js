"use strict";
function detectType(val) {
  if (typeof val === 'string') {
    return val.toLowerCase();
  }
  return val + 3;
}
function provideId(id) {
  if (!id) {
    console.log('Please provide ID');
    return;
  }
  return id.toLowerCase();
}
function printAll(strs) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    }
    else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}
function isAdminAccount(account) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
}
function logValue(x) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  }
  else {
    console.log(x.toUpperCase());
  }
}
function isFish(pet) {
  return pet.swim !== undefined;
}
function getFood(pet) {
  if (isFish(pet)) {
    pet;
    return 'Fish Food';
  }
  else {
    pet;
    return 'Bird Food';
  }
}
function getTrueShape(shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side;
}
