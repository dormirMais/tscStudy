{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  /*
  interface PositionInterface{
    z: number;
  }
  이렇게 interface를 같은 모양으로 만들고 요소를 추가하면 자동으로 합쳐진다.  type은 이게 안된다. interface만 merge가 가능!
  타입은 중복되었다고 나옴. 
  */

  // type과 interface의 차이
  // 공통점
  // => 둘 다 obj형태로 만들 수 있다.

  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  // => 둘 다 class에서 구현이 가능하다.

  class Pos1 implements PositionType {
    x!: number;
    y!: number;
  }
  class Pos2 implements PositionInterface {
    x!: number;
    y!: number;
  }

  // 둘 다 extends가능

  interface ZPositionInterface extends PositionInterface {
    // 이렇게 interface를 확장할 수 있다.
    z: number;
  }

  type ZPositiionType = PositionType & { z: number }; // 이렇게 type 2가지를 묶어줄 수도 있다.

  //type aliases can use computed properties

  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; //이건 이런의미다. Name이라는 타입은 person에 있는 name과 같은 타입으로 지정할 것이다.
  type NumeberType = number;
  type Direction = "left" | "right"; // 이러한 union type또한 Interface애서는 구현이 불가능하다.
}
