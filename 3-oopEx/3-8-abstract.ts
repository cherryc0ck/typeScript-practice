{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 5; // Class Level
    private coffeeBeans: number = 0; // Instance (object) Level

     constructor(beans: number) {
      this.coffeeBeans = beans;
    };

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots*CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('no enoph beans ㅠㅠ');
      }
      this.coffeeBeans -= shots*CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    };

    private preheat(): void {
      console.log('heating up...');
    }

    protected abstract extract(shots: number): CoffeeCup;

    fillCoffeeBeans(beans: number): void {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();

      return this.extract(shots);
    };

    clean(): void{
      console.log('cleaning the machine');
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk... ');
    }
    
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true
      }
    }
  };

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16,'SSSS'),
    new SweetCoffeeMaker(16)
  ];

  machines.forEach(machine => {
    console.log('-------------')
    machine.makeCoffee(1);
  });
}