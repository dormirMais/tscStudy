{
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about" | "contact";

  // 하나를 키로 쓰고 나머지를 다른 타입으로 묶고 싶을 때  Record를 사용한다... 예시는 엄청 직관적인데 뭔가 느낌적으로 복잡할 듯하다.
  /*
    type Record<K extends keyof any, T> = {
    [P in K]: T;  
    };

    소스코드도 꽤나 직관 적이다... 그냥 map 돌리면서 각요소 key로 가져오고 각각의 key에 다른 인자 타입을 넣어주었네...
  */
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
