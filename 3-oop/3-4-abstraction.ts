{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; // private키워드를 이용해서 외부에서 참조가 불가능하도록 만들어준다.
    private coffeeBeans: number = 0; // 반면 이렇게 일반적으로 정의하는 경우 Instance level로 정의된다.

    private constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT) {
        throw new Error("not enough coffee beans");
      }
      console.log(`grinding beans for ${shots}`);
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT;
      console.log(`${this.coffeeBeans} of coffeebeans left `);
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(10);
  console.log(maker.makeCoffee(2));

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeeBeans(10);
  console.log(maker2.makeCoffee(2));
}
