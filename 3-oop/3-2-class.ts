import { type } from "os";

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMS_PER_SHOT: number = 7; //static을 이용해서 정의해주면 class level로 정의 된다.
    coffeeBeans: number = 0; // 반면 이렇게 일반적으로 정의하는 경우 Instance level로 정의된다.

    constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMS_PER_SHOT) {
        // static을 통해 class level로 만든경우 this로 접근하지 않고 class명을 통해서 접근한다.
        // 이렇게 만들면 아래애서 처럼 console을 찍어도 콘솔에 표시되지 않는다.
        throw new Error("not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMS_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(13);
  console.log(maker);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
}
