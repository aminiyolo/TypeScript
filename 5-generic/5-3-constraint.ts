interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log('full time');
    }
    workFullTime(){}
}

class partTimeEmployee implements Employee {
    pay() {
        console.log('part time');
    }
    workPartTime(){}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴 함수는 좋지 않다.
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const park = new FullTimeEmployee();
const corn = new partTimeEmployee();

const parkAfterPay = pay(park);
const cornAfterPay = pay(corn);
parkAfterPay.workFullTime;
cornAfterPay.workPartTime;

const obj = {
    name: 'park',
    age: 25,
}

const obj2 = {
    animal: 'dog'
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getValue(obj, 'name')); // park
console.log(getValue(obj, 'age')); // 25
console.log(getValue(obj2, 'animal')); // dog
