class User{
    // this specify that what ever we are using inside the constructor using this
    // must be aware of its type
    name: string
    email: string
    // because we have to specify any empty type if we are not assigning it somewhere
    readonly city: string = "Hyderabad";
    // we can also use private keyword in typescript
    private designation: string = "software developer";

    // protected is below
    // protected can be access only its child classes
    protected salary:string="something"
   
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
    // getters and setters 
    set nameSetter(name:string) {
        //setting the name
    }
    get nameGetter():string {
        return this.name;
    }
    private deleteToken() {
        //this can be called within the class cannot be called outside the class
    }
}



class Admin{
    readonly city:string="hyderabad"
    constructor(
        public name: string,
        public email: string,
        private designation:string
    ) {
        
    }
}


const admin = new Admin('qubais', 'qubais@gmail.com', 'software engineer');
console.log(admin);


export {}