{
  // Type Assertions  => 별로 추천하지 않는다.

  function jsStrFunc(): any {
    return "hello";
  }

  // return type을 any로 바꾸었기 때문에 기본적으로 result 에서는 length를 사용할 수 없다.

  const result = jsStrFunc();
  // result.length; => 사용이 불가능하다. result는 any type이기 때문이다.

  console.log((result as string).length); // 이를 assertion을 이용해서 casting이 가능하다. 정말 정말 확실할 때만 사용해야 한다. result의 type이 string이 아니어도 일단 죽이진 않기 때문에 로지컬 오류 발생가능
  console.log(<string>result.length); // 이렇게도 사용이 가능하다.

  const wrong: any = 5;
  // console.log(wrong as Array<number>);  이경우에는 그냥 죽는다. 이 경우에는 type error가 난다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers(); // 기본적으로 해당 함수는 numbers[]를 반환하거나  undefined를 반환한다. 여기에도 !를 붙여줄 수 있다. 하지만 좋지 않다... 장담하는 건 좋지 않아...
  numbers!.push(2); // 따라서 해당 라인은 기본적으로 오류가 발생할 가능성이 높다. 왜냐하면 numbers가 undefined라면 push를 적용할 수 없기 때문이다. 이경우 !를 사용하면 무조건 push를 사용할 수 있는 경우라고 지정해준다.
  // 결론은 알아두면 좋지만 그래도 되도록이면 사용하지 않도록 하는게 맞다. 안정성을 너무 많이 훼손한다.
}
