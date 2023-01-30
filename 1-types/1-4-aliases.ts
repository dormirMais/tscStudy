{
  // alias는 TSC의 꽃이다... 복잡하고 다양한 타입을 정의할 수있다...
  // type alias는 type을 커스텀 할 수 있다... 자바의 클래스처럼 이해하면 되나?...

  type Text = string;
  const name: Text = "haki";
  const address: Text = "brasil";

  type Num = number;

  // 오.. 굉장히 자바의 클래스와 비슷한 느낌이다...
  type Student = {
    name: string;
    age: number;
  };
  // 이런식으로 사용이 가능하다. 자바에서 인스턴스를 만드는 것과 비슷하다.
  const student: Student = {
    name: "haki",
    age: 100,
  };

  // String Literal Types 이 경우에는 주어진 처음에 type으로 정해진 아이만 사용이 가능하다.
  type Name = "name";
  let hakiName: Name;
  hakiName = "name";
  //예를 들어 hakiName에는 "name"을 제외하고 그 어떤 것도 들어갈 수 없다.

  type JSON = "json";
  const json: JSON = "json";
}
