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
    private coffeeBeans: number = 0;

    public constructor(coffeBeans: number) {
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
      console.log("현재 남은 커피의 양 => ", this.coffeeBeans);
      console.log(`grinding beans for ${shots}`);
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT;
      console.log(`커피를 다 만들고 남은 커피의 양 => ${this.coffeeBeans} `);
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk() {
      console.log("steaming some milk");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  } // 기본적으로 extends를 사용해서 상속이 가능하다.

  const machine = CoffeeMachine.makeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "aksjhdkajshd");
  console.log(latteMachine.serialNumber);
  const coffee = latteMachine.makeCoffee(1); //기본적으로 CaffeLatteMachine은 CoffeeMachine으로부터 상속을 받은 클래스이기 때문에 기존에 CoffeeMachine
  //이 가지고 있는 메소드나 프로퍼티를 사용할 수 있다.
  // +overwriting을 이용해서 해당 메소드를 덮어쓸 수 있다.
  console.log(coffee);
}
