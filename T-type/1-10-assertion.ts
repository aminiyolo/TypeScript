{
    // Type Assertions (not good)
    function jsStrFunc(): any {
        return 'Hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string> result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // Really bad case

    function findNumbers(): number[] | undefined {
        return undefined;
    };
    const numbers = findNumbers();
    numbers!.push(2); // 😱

    const button1 = document.querySelector('class'); // return Element or null
    const button2 = document.querySelector('class')!; // return only Element
}