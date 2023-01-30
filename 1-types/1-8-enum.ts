{
  // Enum : 기본적으로 여러가지의 관련된 상수 값들을 한곳에 모아서 정의할 수 있게 도와준다. 상태관리 같은걸 할 때 유용하게 쓸 수 있을 것 처럼 느껴진다.
  // JS에는 기본적으로 enum을 제공하지 않는데 TSC에서는 제공을 한다.

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNSDAY = 2;

  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNSDAY: 2 });
  DAYS_ENUM.MONDAY; //이런식으로 JS는 enum을 지원하지는 않지많 freeze를 사용해서 비슷하게 사용이 가능하다.

  // TSC에서는 enum 키워드를 써서 이부분을 편하게 사용할 수 있다.

  enum Days {
    Monday, // 0    따로 값을 지정하지 않으면 이렇게 0부터 자동으로 할당이 된다. 같은 원리로 또 1을 지정해주면 그 다음거는 1씩 증가하며 할당된다
    Tuesday, // 1   문자열의 경우는 순서를 알 수 없기 때문에 문자열을 지정하고 싶다면 수동으로 지정해 주어야 한다.
    WednsdAY, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }

  console.log(Days.Tuesday);
  const day = Days.Tuesday;

  // But TSC에서 enum은 되도록이면 사용하지 않는 것이 좋다.
  // enum으로 타입이 지정된 경우에 어떤 것도 넣을 수 있다. 예를 들어 현재 상태에서는 Days에는 number가 할당되어있다.
  // 따라서 const day: number와 실질적으로 같기 때문에  형태를 제한하고자 하는 TSC의 철학과 맞지 않는다. => 타입이 보장되지 않는다.
  // 이를 해결하기 위해서 그냥 union을 사용하는게 낫다.

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednsday"; // 이런식으로 union을 이용해서 작업을 해주는 것이 TSC의 철학에 맞다. 따라서 해당 타입을 가지고 변수를 만들면 union안에 있는 경우에서만 선택이 가능하다.
  // 정말 소수의 경우에는 enum이 필요한 경우가 있는데 예를 들어서 다른 시스템에서 돌려야 하는 경우가 그렇다. 해당 시스템이 union이 없는데 enum이 있다면 그나마 차선책으로 enum을 이용한다.
}
