{
  // Union Types: OR

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down"); //move의 params의 옵션이 몇개로 정해져 있다고 생각하면 된다.

  // 진짜 편하다...... 이런식으로 문제의 발생을 사전에 차단이 가능하다는 것이 엄청 좋다...
  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "logged in",
      },
    };
  }

  type State = true | false;

  function printLoginState(state: State): SuccessState | FailState {
    if (state)
      return {
        response: {
          body: "success",
        },
      };
    return {
      reason: "로그인 실패",
    };
  }
}
