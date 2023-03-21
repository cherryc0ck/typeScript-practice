{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 5;
  let coffeeBeans = 0;

  /* 커피 만드는 함수 */
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots*BEANS_GRAMM_PER_SHOT) {
      throw new Error('no enoph beans ㅠㅠ');
    }
    coffeeBeans -= shots*BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false
    }
  };
  coffeeBeans+= 10;
  const coffee = makeCoffee(2);
  console.log(coffee);
}