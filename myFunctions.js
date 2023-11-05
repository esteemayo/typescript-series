"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var myValue = addTwo(5);
console.log(myValue);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('john');
function signUpUser(name, email, isPaid) { }
signUpUser('John', 'john@example.com', false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser('John', 'john@example.com');
