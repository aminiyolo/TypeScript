{
    // Javascript ❗❗
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // Typescript
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }
    
    // Javascript ❗❗
    function jsFetchNum(id) {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });       
    }
    
    // Typescript
    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });       
    }    

    // Javascript => Typescript
    // Optional parameter / don't need undefined parameter
    function printName(firstName: string, lastName?:string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('min');
    printName('min', 'park');
    printName('min', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    } 
    printMessage();

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5,));
}