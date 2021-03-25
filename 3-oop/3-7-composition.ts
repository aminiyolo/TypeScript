{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    class CoffeeMakerImpl implements CoffeeMaker {
        private static beans_gram_per_shot: number = 3; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    class cheapMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }
    class FancyMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Steaming some fancy milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }
    class ColdMilkSteamer implements MilkFrother {
        private steamMilk() {
            console.log('Steaming some cold milk...');
            return true;
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            const milk = this.steamMilk();
            return {
                ...cup,
                hasMilk: milk,
            };
        }
    }

    class NoMilkSteamer implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class AutomaticSugarMixer implements SugarProvider{
        private getSugar() {
            console.log('getting some sugar...');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }
    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log('getting some sugar...');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }
    
     // Milk
     const cheapMlikMaker = new cheapMilkSteamer();
     const fancyMilkMaker = new FancyMilkSteamer();
     const coldMilkMaker = new ColdMilkSteamer();
     const noMilk = new NoMilkSteamer();

     // Sugar
     const candySugar = new AutomaticSugarMixer();
     const sugar = new SugarMixer();
     const noSugar = new NoSugar();

     //
     const sweetCandyMachine = new CoffeeMakerImpl(12, noMilk, candySugar,);
     const sweetMachine = new CoffeeMakerImpl(12, noMilk, sugar);

     const latteMachine = new CoffeeMakerImpl(12, cheapMlikMaker, noSugar);
     const coldLatteMachine = new CoffeeMakerImpl(12, coldMilkMaker, noSugar);
     const sweetLatteMachine = new CoffeeMakerImpl(12, fancyMilkMaker, candySugar);
    console.log(sweetLatteMachine.makeCoffee(3));
    
}