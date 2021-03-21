{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMakerImpl implements CoffeeMaker {
        private static beans_gram_per_shot: number = 3; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMakerImpl {
            return new CoffeeMakerImpl(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMakerImpl.beans_gram_per_shot) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMakerImpl.beans_gram_per_shot;
        }

        private preheat(): void {
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
            }
    }

    class CafeLatteMaker extends CoffeeMakerImpl{
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('steaming some milk...');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        } 
     }

     const machine = new CoffeeMakerImpl(10);
     const latteMachine = new CafeLatteMaker(10, 'asfd');
     const coffee = latteMachine.makeCoffee(3);
     console.log(coffee);
     const sNumber = latteMachine.serialNumber;
     console.log(sNumber);
     
     

    // const maker: CoffeeMakerImpl = CoffeeMakerImpl.makeMachine(10);
    // maker.fillCoffeeBeans(32);
    // maker.makeCoffee(3);

    // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(10);
    // maker2.fillCoffeeBeans(32);
    // maker2.makeCoffee(3);
    // maker2.clean;
}