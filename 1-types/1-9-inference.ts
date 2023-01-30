{
  // Type Inference

  let text = "hello";
  // text = 1; => 이런식으로 사용이 불가능하다. text의 경우 선언과 동시에 str을 할당했다. 그러면 TSC는 암묵적으로 이것이 str이라고 받아들인다. 따라서 str을 제외하고 다른 타입의 할당은 불가하다.

  // function print(message) {  이러한 경우에도 마찬가지 인데 message에 type을 지정하지 않으면 자동으로 any로 적용하게 된다. 이는 TSC의 철학에 위배된다.
  //   console.log(message);
  // }

  function add(x: number, y: number) {
    return x + y; // 이 경우에도 TSC는 유사하게 inference(추론)을 진행한다. return type이 number일 것이라고 암묵적으로 추론한다. 똑똑함...
  }

  const result = add(1, 2); // 이경우 자동으로 result에 number type을 지정해준다.

  // 하지만 중요한 건 명시적으로 적어주는 것이 좋다. 명확한게 좋기 때문이다. 나의 경우는 꼭 적어주는게 좋을 것 같다.
}
