{
    // Array
    const numbers: number[] = [1, 2, 3];
    const scores: Array<number> = [10, 20, 30];
    function printArray(numbers: readonly number[]) {}

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['park', 13];
    student[0] // 'park'
    student[1] // 13
    const [name, age] = student;
}