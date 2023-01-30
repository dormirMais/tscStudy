{
  //number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // !이런식으로는 작성하면 안된다.
  let age: number | undefined; //이런식으로 작성, optional한 경우 이런식으로 사용한다.
  age = undefined;
  age = 1;

  function find(): number | undefined {
    // 이런식으로 함수의 리턴값도 nullable하게 만들어줄 수 있다.
    return undefined;
  }

  //null
  let person: null; // !null 또한 위와 같은 이유로 단독으로 사용하지 않는다.
  let person2: string | null;

  // unknown => 되도록이면 사용하지 않는 것이 좋다. js의 문제점을 그대로 가져온 느낌이다.
  let notSure: unknown = 0;
  notSure = "문자열";
  notSure = true;

  // any => unknown과 같은 이유로 되도록이면 사용하지 않는 것이 좋다. 정말 불가피한 경우에만 사용할 것.
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }

  // never => 함수에서 절대 리턴되지 않을 때 그것을 명시하기 위해 쓰인다.
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    // while (true) {}
  }

  // object => 원시타입을 제외한 모든 obj타입을 할당할 수가 있다. 엥간한건 다 넣을 수있다. 따라서 이 경우에는 해당 obj가 어떤 타입인지를 좀더 명시해 주는 것이 좋다.
  let obg: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "haki" });
  acceptSomeObject({ dog: "poki" });
}
