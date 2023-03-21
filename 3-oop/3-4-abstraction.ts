{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 5; // Class Level
    private coffeeBeans: number = 0; // Instance (object) Level

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    };

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);

      return {
        shots,
        hasMilk: false
      }
    } 

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


  class AmateurUser {
    constructor(private machine: CoffeeMachine) {
    }

    makeCoffee() {
      const coffee = this.machine.makeCoffee(10);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {
    }

    makeCoffee() {
      const coffee = this.machine.makeCoffee(10);
      console.log(coffee);
      this.machine.fillCoffeeBeans(100);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(100);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
}