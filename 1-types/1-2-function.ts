{
  // // JS안좋은 예시 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // TSC => 이런식으로 각 파라미터와 리턴 타입을 정해주는 것이 좋다.
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JS
  // function jsFetchNum(id) {
  //   //code....
  //   //code....
  //   //code....
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // TSC
  function fetchNum(id: string): Promise<number> {
    //code....
    //code....
    //code....
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //JS => TSC
  // Optional parameter
  function printName(firstName: string, lastName: string) {
    console.log(firstName);
    console.log(lastName);
  }
  // 기본적으로 위의 함수는 param을 2개 가지고 있고, 각각의 param은 type이 정해져 있다. 따라서 param의 갯수와 타입을 필수적으로 넣어야 한다.
  // 하지만 필요에 따라 어떠한 param은 optional하게 넣어야 하는 함수가 있을 수 있다.
  function TSCprintName(firstName: string, lastName?: string) {
    //이와 같이 ?를 사용하여 param을 optional하게 사용이 가능하다.
    console.log(firstName);
    console.log(lastName);
  }
  // 이렇게 3가지 경우모두 적용이 가능하다.
  TSCprintName("haki", "pong");
  TSCprintName("haki");
  TSCprintName("haki", undefined);

  // Default parameter. 이렇게 default값을 설정해 줄 수도 있다.
  function printMessage(message: string = "dafault message") {
    console.log(message);
  }

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
}
