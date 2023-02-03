{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // 특정 필드만을 업데이트 하기 위해 Partial을 사용할 수 있다.

  /*
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  이 부분을 잘 생각해보면 너무나도 당연하게 논리가 전개된다. T에 있는 proprty가 모두 옵션으로 존재하기 때문에 몇개만 pick해서 사용해도된다.
  update하기 위해 return하는 모양은 너무나도 자연스러운 js의 형식이다.
*/
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learnTS",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
  console.log(todo);
}
``;
