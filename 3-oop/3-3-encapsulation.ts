{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private
    // protected
    class CoffeeMaker {
        private static beans_gram_per_shot: number = 3; // class level
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.beans_gram_per_shot) {
                throw new Error('Not enough coffee beans!');
                }       
            this.coffeeBeans -= shots * CoffeeMaker.beans_gram_per_shot;
            return {
                shots,
                hasMilk: false,
                }       
            }
        }
    const maker = CoffeeMaker.makeMachine(10);
    const maker3 = CoffeeMaker.makeMachine(8);
    console.log(maker3);
    maker.fillCoffeeBeans(20);
    maker.makeCoffee(10);
    console.log(maker);

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge: number = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if(num < 0) {
                throw new Error('age should be greater than 0 !')
            }
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }
    const user = new User('steve', 'jobs');
    console.log(user.fullName);
    console.log(user.age);
    user.age = 10;
    console.log(user.age);
 }