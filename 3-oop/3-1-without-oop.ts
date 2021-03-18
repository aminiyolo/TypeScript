{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    const beans_gram_per_shot: number = 3;
    let coffeeBeans: number = 10;
    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots * beans_gram_per_shot) {
            throw new Error('Not enough coffee beans!');
        }       
        coffeeBeans -= shots * beans_gram_per_shot;
        return {
            shots,
            hasMilk: false,
        }    
        
}; 
    const coffee = makeCoffee(3);
    console.log(coffee);
}