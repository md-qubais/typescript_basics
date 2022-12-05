const obj = {
    name: "mohammed qubaisuddin",
    email: "mohammed@gmail.com",
    isActive:true,
}


function createUser({ name: string, isPaid: boolean }) {
    
}

createUser({ name: 'mohammed', isPaid: true });


function createCourse(): { name: string, price: number }{
    return {name:"reactjs",price:399};
}


// type Aliases : we can crate our own type
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean;
// }

// type myString = string;


// function createActiveUser(user: User): User{
//     return user;
// }

// createActiveUser({ name: "mohammed qubaisuddin", email: "mohammed@gmail.com", isActive: true });


type User = {
    // readonly means just read and dont write
    readonly _id: string,
    name: string,
    email: string,
    isActive:boolean,
}

const obj1: User = {
    _id: '123',
    name: "mohammed",
    email: "mohammed@gmail.com",
    isActive:true,
}

// obj1._id='another' cannot do this because it will give error





export {}