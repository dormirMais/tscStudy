{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: ToDo) {
    // todo.title = "누가 바꿔버릴 수 있다..." display의 경우 화면에 표시만 해주는 함수이다. 그런데 이런식으로 누가 조작을 가할 수 있다. 이를 방지해 주어야 한다.
  }
  // 이를 방지하기 위해 readonly같이 옵셔널한 타입 변경은 이미 만들어져 있음... 좋다...
  function displayReadonly(todo: Readonly<ToDo>) {
    // todo.title = "변경!!" 이런식으로 변경이 불가능하다. 위에서 이미 readonly로 바꿔 주었기 때문이다...
  }
}
