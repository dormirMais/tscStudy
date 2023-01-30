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
}
