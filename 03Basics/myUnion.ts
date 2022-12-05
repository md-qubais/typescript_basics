let score: number | string = 1;
score = 'this is the score';


type User= {
    name: string,
    id:number,
}

type Admin = {
    userName: string,
    id:number,
}

let mohammed: User | Admin | string = 'mohammed qubaisuddin';
mohammed = {
    name: "mohammed qubaisuddin",
    id:1,
}

// function getObjId({ name, age}:{name:string,age:number}) {
//     console.log(name, age);
// }

// getObjId({ name: "qubais", age: 21 });


function getObjId(id: number | string) {
    if (typeof id === 'number') {
        id += 2;
    }
    else {
        id.toLowerCase();
    }
}

const data: number[] = [1, 2, 3, 4];
const data1: string[] = ['1', '2', '3', '4'];
// we can insert either number or string inside an array
const data2: (number | string)[] = ['1', '2']
// we can also write any
const data3: any[] = [1, '2', true];



// we can also do literal type of assignment
let pi: 3.14 = 3.14;
// pi=3.145 //we cannot do this


let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle';
// seatAllotment='crew' we cannot allot crew because we only got there option




export {}