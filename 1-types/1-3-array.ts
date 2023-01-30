{
  // Array
  const fruits: string[] = ["tomato", "banana"];
  const numbers: Array<number> = [1, 3, 4];

  // readonly를 넣어주면 해당 데이터를 절대 변경할 수 없고 데이터를 읽을 수만 있다.
  function printArray(fruits: readonly string[]) {
    // fruits.push() => 이런식으로 데이터를 변경하고자 하면 readonly이기 때문에 데이터 변경이 불가능하다.
    // readonly를 사용할 경우에는 Array<number>이 방식을 사용할 수 없다.
  }

  // Tuple : 배열은 배열인데 서로 다른 타입을 갖을 수 있는 배열
  // but tuple을 사용하는 것을 권장하지 않는다.
  // 1. 데이터에 접근할 때 index를 사용해서 접근하는 것은 가독성이 떨어진다. => 클래스 형태로 사용하는 것이 좋다.
  // 그래서 보통 이렇게 multiType이 필요한 경우 interface, type alias, class를 이용해서 사용한다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; //이런식으로 구조분해 할당을 이용해서 이용할 수는 있다. 그럼에도 불구하고 안좋음.... 대표적으로 useState가 이러한 튜플을 잘 이용한 예이다.
}
