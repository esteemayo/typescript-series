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
function getValue(myVal) {
    if (myValue > 5) {
        return true;
    }
    return '200 OK';
}
getValue(1);
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
