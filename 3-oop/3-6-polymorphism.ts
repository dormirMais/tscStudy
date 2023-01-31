{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean; // "?"를 이용해서 optional한 값을 만들 수 있다.
    hasSugar?: boolean;
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
      console.log(`커피를 다 만들고 남은 커피의 양 => `, this.coffeeBeans);
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

  class SweetCoffeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    //이렇게 implement된 interface를 사용하면 해당 interface에 있는 기능만 사용이 가능하다.
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "asd"),
    new SweetCoffeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "asd"),
    new SweetCoffeMaker(16),
  ];

  /*
  const machines: = [       이렇게 일반 적인 형태로 사용하면 요 아이들이 가지고 있는 공통 요소들을 사용할 수 있다.
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "asd"),
    new SweetCoffeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "asd"),
    new SweetCoffeMaker(16),
  ];
  */
  machines.forEach((machine) => {
    console.log("==============================================");
    machine.makeCoffee(1); //이게 바로 엄청난 장점이다. 어떤 클래스이던지 상관없이 하나의 메소드로 모두 동작을 수행하고 있다.
  });
}
