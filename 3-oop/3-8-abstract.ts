{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean; // "?"를 이용해서 optional한 값을 만들 수 있다.
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // abstract를 이용해서 추상화를 적용할 수 있다. 추상화가 진행된 클래스는 자체로 인스턴스를 생성해 낼 수 없다.
  // 기본적으로 공통적으로 필요한 부분들은 일반적인 클래스를 작성하는 것과 동일하게 작성하면 된다.
  // 반면에 상속받은 클래스에서 특수성을 띈 동작이 있는 경우 해당 메소드에는 abstract 키워드를 통해서 명시를 해준다. 해당 메소드는 상속을 받을 수 구체화 해준다.
  // 컴포지션과 이렇게 클래스를 이용하여 해결하는 솔루션은 각각의 경우마다 적절함이 다르다. 따라서 잘 판단하여 적절하게 사용하는 것이 중요하다.
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; // private키워드를 이용해서 외부에서 참조가 불가능하도록 만들어준다.
    private coffeeBeans: number = 0;

    public constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
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

    protected abstract extract(shots: number): CoffeeCup; // abstract의 경우 그것을 상속받는 클래스에서 구현해 주기 때문에 abstract로 지정된 메소드는 명시만 해놓을 수 있다.

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  } // 기본적으로 extends를 사용해서 상속이 가능하다.

  class SweetCoffeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }
}
