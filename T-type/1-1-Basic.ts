{
    // JavaScript
    // Primitive: number, string, boolean, bigint, symbol, null, undefined
    // Object: function, array
    
    // number
    const num: number = -6;

    // string
    const str: string = 'str';

    // boolean
    const bool: boolean = false;

    // undefined
    let age: number | undefined;
    age = undefined;
    age = 7;
    function find(): number | undefined {
        return age;
    }

    // null
    let person: string | null;

    // unknown (bad)
    let notSure: unknown = 0;
    notSure = 'p';
    notSure = 7;

    // any (bad)
    let anything: any = 0;
    anything = 'o';

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    // never
    function throwError(message: string): never {
        throw new Error(message);
        //  while(true) {

        // }
    }

    // object (bad)
    let obj: object
    function acceptSomeObject(obj: object){}
    acceptSomeObject({name:'park'});
    acceptSomeObject({age:7}); 
}