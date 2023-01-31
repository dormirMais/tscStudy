{
  // 기존에 3-2에서 작성했던 코드의 부족한 부분 => porperty가 보호되고 있지 않다.
  // 현재 coffeeMaker 인스턴스를 생성한다면 안에있는 coffeeBeans에 .연산자를 통해서 직접접근이 가능하다.
  // 예를 들어서 coffemaker인스턴스를 만든다음. coffeemaker.coffeebeans = -30; 이런 식으로 할당한다고 가정해보자. 문제다...

  // public, private, protected와 같은 것을 이용해서 다양한 레벨로 정보를 은닉할 수 있다. (자바랑 거의 같네?....)
  // 따로 지정을 해주지 않으면 기본적으로는 public 값을 갖는다.
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

  const maker = CoffeeMaker.makeMachine(32);

  //=================================================================

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) throw new Error("you should input positive number");
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Haki", "Poki");
  console.log(user.fullName);
  user.age = 6; //internal age는 private이기 때문에 직접접근이 불가능하지만 setter를 통해서 설정이 가능하다.
}
