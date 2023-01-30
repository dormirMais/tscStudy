{
  // JS안좋은 예시 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TSC => 이런식으로 각 파라미터와 리턴 타입을 정해주는 것이 좋다.
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JS
  function jsFetchNum(id) {
    //code....
    //code....
    //code....
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TSC
  function fetchNum(id: string): Promise<number> {
    //code....
    //code....
    //code....
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}
