{
    function checkNotNullBad(args: any | null): any {
        if(args == null) {
            throw new Error('NULL');
        }
        return args;
    }
    const result = checkNotNullBad(123);
    console.log(result);
    
    function checkNotNull<T>(arg: T | null): T {
        if(arg == null) {
            throw new Error('Null');
        }
        return arg;
    }
    const newResult = checkNotNull(123);
    const bool: boolean = checkNotNull(true);
    console.log((newResult));
    console.log((bool));
}