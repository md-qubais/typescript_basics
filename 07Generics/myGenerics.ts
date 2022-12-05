// when we are going to write generic type
// <Type> the value is going to get locked down
// this means accpeting the number then return the number
function identity<Type>(value: Type): Type {
    return value;
}

// same as above identity function      
function identityT<T>(value: T): T {
    return value;
}


interface Bottle{
    brand: string,
    type:number
}

identityT<Bottle>({ brand: 'aquafine', type: 1 });