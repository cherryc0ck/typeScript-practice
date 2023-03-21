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

     constructor(beans: number) {
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, readonly serialNumber: string) {
      super(beans);
    }
    

    private steamMilk(): void {
      console.log('Steaming some milk... ');
    }

    // 상속받은 자식인 CoffeeMachine 클래스에서 부모인 CoffeeMachine의 makeCoffee함수를 오버라이딩
    // super는 부모의 모든것을 사용할 수 있다.
    makeCoffee(shots: number): CoffeeCup { 
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }    
  }

  const machine = new CoffeeMachine(20);
  const latteMachine = new CaffeLatteMachine(20, 'SSSS');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}