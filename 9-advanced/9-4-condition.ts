{
  type Check<T> = T extends string ? boolean : number; // 이런식으로 조건을 설정해서 type을 정해줄 수 있다.

  type Type = Check<string>; // boolean

  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

  type T0 = TypeName<string>; // string
  type T1 = TypeName<"a">; // string
  type T2 = TypeName<() => void>; // function
}
