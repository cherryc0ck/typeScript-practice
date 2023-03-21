{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 5; // Class Level
    private coffeeBeans: number = 0; // Instance (object) Level

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    };

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    };

    fillCoffeeBeans(beans: number): void {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
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

  const maker = CoffeeMaker.makeMachine(100);
  maker.fillCoffeeBeans(100);
  
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private interanlAge = 4;

    get age(): number {
      return this.interanlAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('age가 0보다 작습니다.');
      }
      this.interanlAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      
    }
  }


  const user = new User('stive', 'jobs');
  user.age = 6;
  console.log(user);
}