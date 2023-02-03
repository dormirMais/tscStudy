{
  // 기존에 있는 type들을 이용하면서 어느정도의 변화를 줄 수 있다.

  // 이런 형태의 타입이 있다고 가정해보자. 논리적으로 보았을 때 가장 상위에 있는 Video에 변형이 일어나면 그와 연관된 다른 type들도 적절하게 변형을 주어야 한다.
  // 예을들어서 Video의 property를 추가하거나... 제거하거나 했을 때 이와 연관된 타입들에 대해서도 일일히 변경을 가해주어야 한다. 개 노가다다. 이를 간편하게 해결해 주는 것이 map type이다.
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  /*
type VideoOptional = {
  title?: string;
  author?: string;
  description?: string;
};

type VideoReadOnly = {
  readonly title?: string;
  readonly author?: string;
  readonly description?: string;
};
*/

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in과 동일하다. 이런식으로 map과 비슷하게 type을 정의해줄 수 있다.
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // 이런식으로 구성하면 이아이를 매핑해서 따온 type은 그 안에 있는 data를 변경할 수 없을 것이다.
  };

  const video: ReadOnly<Video> = {
    // 그래서 이아이를 이렇게 만들어 주고 추후에 video에 있는 아이들을 수정하려고 하면 오류가 나올 것이다. ReadOnly type에서 모든 property를 readonly로 만들었기 때문이다.
    title: "haki",
    author: "poki",
    description: "fun",
  };

  // video.title = "kokokoko"; <= 이런식으로 변경이 불가능하다. 왜냐면 readonly를 적용해 놓았기 때문이다.

  type VideoOptional = Optional<Video>; //따라서 VideoOptional은 기존의 Video와 완전히 같은 타입이 된다. Optional에 조작을 가하면 맞춰서 변화를 줄 수 있다.
  const videoOp: VideoOptional = {}; // Optional을 만들 때 ? 를 붙여주었기 때문에 비어있어도 상관이 없는 것 같음. 그런데 원래 없는걸 집어 넣으면 안됌!!!!

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    age: 1, // 이런식으로 가져온 type의 모든 property가 있을 필요는 없다.
  };

  type Nullable<T> = {
    // 기존에 있던 T에 있는 타입을 그대로 가져오는데 | null이 있기 때문에 union으로 nullable하게 만들어준다.
    [P in keyof T]: T[P] | null;
  };

  const obj2: Nullable<Video> = {
    //nullable로 만들었기 때문에 안에  들어있는 property들을 null로 만들어줄 수 있다.
    title: null,
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    //Proxy라는 type으로 감싸는 역할을 한다... 이부분 딱 이코드가 어렵네... 좀 오래 보고 이해할 것!
    [P in keyof T]: Proxy<T[P]>;
  };
}
