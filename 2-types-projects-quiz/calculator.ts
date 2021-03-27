/**
 * Let's make a calculator 🧮
 */
{
    type Operator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
    function calculate(operator: Operator, firstNum: number, secondNum: number): number {
        switch (operator) {
            case 'add':
                return firstNum + secondNum;
            case 'substract':
                return firstNum - secondNum;
            case 'multiply':
                return firstNum * secondNum;
            case 'divide':
                return firstNum / secondNum;
            case 'remainder':
                return firstNum % secondNum;
            default:
                throw new Error('unknown operator');
        }
    };

    console.log(calculate('add', 1, 3)); // 4
    console.log(calculate('substract', 3, 1)); // 2
    console.log(calculate('multiply', 4, 2)); // 8
    console.log(calculate('divide', 4, 2)); // 2
    console.log(calculate('remainder', 5, 2)); // 1
}