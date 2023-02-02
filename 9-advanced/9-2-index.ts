{
  const obj = {
    name: "haki",
  };

  // 이런식으로 obj의 key에 접근이 가능하다.
  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // 이렇게 특정한 타입 안에 들어있는 타입을 가져와서 사용이 가능하다. string
  const text: Name = "poki"; // 이경우 Name은 string이기 때문에 string만 사용이 가능하다.

  type Gender = Animal["gender"]; // male | female로 type이 정해진다.

  type Keys = keyof Animal; // "name" | "age" | "gender"
  const key: Keys = "age"; // 윗 줄에 있는 3개중 하나만 가능하다.

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "haki",
    gender: "female",
  };
}
