function addTwo(num:number) {
    return num + 2;
}

function getUpper(val:string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    
}

let loginUser=(name:string,email:string,isPaid:boolean = false)=>{}



addTwo(2);
getUpper('mohammed');
signUpUser('mohammed', 'mohammed@gmail.com', true);
loginUser('mohammed', 'qubais@gmail.com');


function getValue(myVal: number): boolean {
    if (myVal > 5) {
        return true;
    }
    return false;
}


const getHello = (s: string): string => {
    return "";
}

const returnVoid = (s: string): void => { };

const returnUndefined = (s: string): undefined => { return; };


// automatically converts its type to string[]
const heros = ['thor', 'spiderman', 'ironman'];


heros.map((hero):string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// some functions never returns a value
function handleError(errmsg: string): never {
    throw new Error(errmsg)
}




export { };
