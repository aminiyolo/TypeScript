{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMakerImpl implements CoffeeMaker {
        private static beans_gram_per_shot: number = 3; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
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

        protected abstract extract(shots: number): CoffeeCup; // 추상적이기 때문에 구현사항을 작성하지 않는다.
            
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
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
     }

     class SweetCoffeeMaker extends CoffeeMakerImpl {
         extract(shots: number): CoffeeCup {
             return {
                 shots,
                 hasSugar: true,
             }
         }
     }
     const machines: CoffeeMaker[] = [
        new CafeLatteMaker(10,'1'),
        new SweetCoffeeMaker(10),
     ]
     machines.forEach(machine => {
         console.log("-----------------------");
         machine.makeCoffee(2);
     })
     const cafeLatteMachine = new CafeLatteMaker(10, 'sss');
     const sweet = new SweetCoffeeMaker(10);
     cafeLatteMachine.makeCoffee(2);
     console.log(sweet.extract(3)); 
}