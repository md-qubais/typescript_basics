"use strict";
exports.__esModule = true;
var obj = {
    name: "mohammed qubaisuddin",
    email: "mohammed@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'mohammed', isPaid: true });
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createActiveUser(user) {
    return user;
}
createActiveUser({ name: "mohammed qubaisuddin", email: "mohammed@gmail.com", isActive: true });
