{
  // 상속에는 근본적인 문제가 있다. 상속의 깊이가 깊어질 수록 상속의 관계가 복잡해진다. 또한 상속과정에서 복수개의 부모요소를 갖을 수 없다.
  // 이를 해결하기 위해서 composition을 이용할 수 있다.
  // 컴포지션은 필요한 것을 가져와서 조립해 나가는 것을 의미한다.
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
  // 싸구려 우유 거품기..
  class CheapMilkSteamer {
    private steamMilk() {
      console.log("steaming some milk");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕 제조기
  class AutomaticSugarMixer {
    private getSugar(): boolean {
      console.log("gettinh some sugar from candy");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilkSteamer //이런식으로 필요한 모듈을 가져와 사용할 수 있다. composition이다.
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee); // 가져온 모듈을 통해서 이렇게 사용이 가능하다.
    }
  } // 기본적으로 extends를 사용해서 상속이 가능하다.

  class SweetCoffeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee); // 가져온 모듈을 통해서 기존의 작업을 해준다.
    }

    getSugar() {
      console.log("getting some sugar");
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    // composition 을 이용해서 작업을 수행한다. 모듈을 이것 저것 가져와서 작업하는 거랑 비슷하다.
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }
  // 위의 클래스는 좋아 보이지만 결정적인 단점이 있다. 그것은 클래스간의 결합력이 크다는 것이다. 클래스간의 결합력이 낮을 수록 좋다 => 각각의 객체는 서로의 작업에 있어 독립성을 유지해야 한다.
}
