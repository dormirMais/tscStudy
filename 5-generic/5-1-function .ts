{
  // 해당 함수의 문제점은 number인지만 확인이 가능하다는 것이다. 따라서 다른 타입도 넣고 싶다면 따로 만들어야한다.
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  const result = checkNotNullBad(123);
  console.log(result);
  checkNotNullBad(null);

  // 이경우도 좋은 예가 아니다. any로 반환한다는 것은 TSC의 철학에 어긋난다. any로 반환하면 타입이 보장되지 않는다(안전하지 않다. )
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }

  const result2 = checkNotNullAnyBad(123);

  // 위와 같은 문제를 해결하기 위해서 generic을 이용한다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) throw new Error("not valid number");
    return arg;
  }
  // 함수를 호출하는 순간 type이 결정되기 때문에 안전하게 사용이 가능하다.
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true); // 이런식으로 type을 지정해 주어서 좀 더 안전하게 통제가 가능하다.
}
