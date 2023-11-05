"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'john',
    email: 'john@example.com',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'john', isPaid: false, email: 'john@example.com' };
createUser(newUser);
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
