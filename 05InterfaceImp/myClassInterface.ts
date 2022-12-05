interface TakePhoto{
    camerMode: string,
    filter: string,
    burst: string
}
// these are above just the protocol that classes need to implement
// because we cannot extends multiple classes thats the reason

// as same as java programming language
class Instagram implements TakePhoto{
    constructor(
        public camerMode: string,
        public filter: string,
        public burst: string,
        public reels:string,
    ) {
        
    }
    createReels(): void {
        console.log('reels created');
        this.reels="something"
    }
}