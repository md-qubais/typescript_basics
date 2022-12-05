abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter:string
    ) {
    }
    // we have not implemented it we are just passing a decleration
    // whatever the class must be implement me
    abstract getSepia():void
}

// we cannot create object of abstract class
// inside constructor must be called super must be called to invoke abstract class and their members


class Instagram extends TakePhoto{
    constructor() {
        super("yes","yes");
    }
    getSepia(): void {
        console.log('implemented getSepia method')
    }
}