interface User{
    readonly dbId:number,
    email: string,
    userId: number, 
    // below means its not required or optional 
    googleId?: string,
    startTrail:(name:string,email:string)=>string
}

const mohammed: User = { githubToken:'its a token',dbId: 1, email: 'mohammed@gmail.com', userId: 1, googleId: '1', startTrail(name:string,email:string) {
    return "";    
},
}

// the difference between type vs interface is that i can reopne the interface and add
// as many values i want after its decleration but in type if we want to mimic extends we write
// type Bear = Animal & {honey:boolean}
// and also a type cannot be changed or add some values after its created
interface User{
    githubToken: string;
}

// i can also extends its thorugh another interface
interface Admin extends User{
    role: "admin" | 'ta' | 'learner',
    
}


export {}


