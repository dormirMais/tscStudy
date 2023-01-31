{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; // private키워드를 이용해서 외부에서 참조가 불가능하도록 만들어준다.
    private coffeeBeans: number = 0; // 반면 이렇게 일반적으로 정의하는 경우 Instance level로 정의된다.

    private constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0 ");
      }
      this.coffeeBeans += beans;
    }
    private preheat() {
      console.log("heating up....");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots`);
      return {
        shots,
        hasMilk: false,
      };
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMS_PER_SHOT) {
        throw new Error("not enough coffee beans");
      }
      console.log(`grinding beans for ${shots}`);
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMS_PER_SHOT;
      console.log(`${this.coffeeBeans} of coffeebeans left `);
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker.makeCoffee(2));
}
