var User = /** @class */ (function () {
    function User(name, email) {
        // because we have to specify any empty type if we are not assigning it somewhere
        this.city = "Hyderabad";
        // we can also use private keyword in typescript
        this.designation = "software developer";
        this.name = name;
        this.email = email;
    }
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(name, email, designation) {
        this.name = name;
        this.email = email;
        this.designation = designation;
        this.city = "hyderabad";
    }
    return Admin;
}());
var admin = new Admin('qubais', 'qubais@gmail.com', 'software engineer');
console.log(admin);
