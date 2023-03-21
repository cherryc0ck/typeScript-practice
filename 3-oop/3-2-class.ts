{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 5; // Class Level
    coffeeBeans: number = 0; // Instance (object) Level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    };

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    };

    addBeans(beans: number): void {
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots*CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('no enoph beans ㅠㅠ');
      }
      this.coffeeBeans -= shots*CoffeeMaker.BEANS_GRAMM_PER_SHOT;
  
      return {
        shots,
        hasMilk: false
      }
    };
  }

  const maker = new CoffeeMaker(10);
  const maker2 = new CoffeeMaker(60);
  const maker3 = CoffeeMaker.makeMachine(100);
  console.log(maker);
  console.log(maker2);
  console.log(maker3);
}