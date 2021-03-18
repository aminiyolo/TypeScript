{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static beans_gram_per_shot: number = 3; // class level
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
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
    const maker = new CoffeeMaker(10);
    console.log(maker);
    const maker2 = new CoffeeMaker(9);
    console.log(maker2);
    const maker3 = CoffeeMaker.makeMachine(8);
    console.log(maker3);
}