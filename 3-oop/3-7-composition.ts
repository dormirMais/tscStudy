{
  // 상속에는 근본적인 문제가 있다. 상속의 깊이가 깊어질 수록 상속의 관계가 복잡해진다. 또한 상속과정에서 복수개의 부모요소를 갖을 수 없다.
  // 이를 해결하기 위해서 composition을 이용할 수 있다.
  // 컴포지션은 필요한 것을 가져와서 조립해 나가는 것을 의미한다.
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean; // "?"를 이용해서 optional한 값을 만들 수 있다.
    hasSugar?: boolean;
  };

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; // private키워드를 이용해서 외부에서 참조가 불가능하도록 만들어준다.
    private coffeeBeans: number = 0;

    public constructor(
      coffeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
  // 싸구려 우유 거품기..

  class CheapMilkSteamer implements MilkFrother {
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

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Fancy steaming some milk");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Cold steaming some milk");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //설탕 제조기
  class CandySugarMixer implements SugarProvider {
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

  class SugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log("gettinh some sugar from jar");
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 위의 클래스는 좋아 보이지만 결정적인 단점이 있다. 그것은 클래스간의 결합력이 크다는 것이다. 클래스간의 결합력이 낮을 수록 좋다 => 각각의 객체는 서로의 작업에 있어 독립성을 유지해야 한다.
  // 이를 해결하기 위해서 interface를 사용할 수 있다.
  // interface를 이용해서 디커플링을 한다.

  //Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  //Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // interface를 이용해서 모듈을 넣기 때문에 다양한 형식을 적용할 수 있다. === 클래스의 형식에 구애받지 않는다.
  // 약간 이런 느낌이다. k2에는 5.56미리 탄이 들어가는데 5.56미리만 맞으면 그게 대 전차용인지, 공포탄인지 상관이 없는 거다.

  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);

  // 중요한 건 이런 부분에 대해 적절한 지점을 찾아야 한다는 것이다. 너무 오버해서 델리케이트 하게 만들 필요도 없고 너무 통으로 만드는 것도 안좋다. 그 적절함을 찾는게 중요하다.
}
