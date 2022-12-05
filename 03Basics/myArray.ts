let superHeroes: string[] = [];
superHeroes.push('spiderman');

// let heroPower: number[] = []; we can also write in below way
let heroPower: Array<number> = [];
heroPower.push(10);


type User = {
    name: string,
    isActive:boolean
}

const allUsers: User[] = [{ name: "qubais", isActive: false }, { name: "imad", isActive: true }];

// we can define 2d arrays in below way     
const mlModels: number[][] = [
    [1,2,3,4]   
]



export { };
