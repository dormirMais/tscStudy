interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("full time");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {}
}

// 이런식으로 세부적인 타입을 인자로 받아서 추상적인 타입으로 반환하는 함수는 좋지 않음!
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

const haki = new FullTimeEmployee();
const poki = new PartTimeEmployee();

haki.workFullTime();
poki.workPartTime();

// payBad 함수는 Employee형태를 반환한다. 즉 AfterPay상태에서는 이 emplyee가 Fulltime인지 PartTime인지를 알 수가 없다.
const hakiAfterPay = payBad(haki);
const pokiAfterPay = payBad(poki);

// 이렇게 generic을 이용해서 해결이 가능하다. 여기서 주의해야 할점은 T를 설정하는 과정에서 extends를 이용해서 Emplyee를 확장했다는 것을 명시해 주어야 한다는 것이다.
// extends를 해주지 않는다면 제네릭은 해당 T가 무엇인지를 알지 못하기 때문에  pay()를 사용하지 못하게 된다. 따라서 extends를 해주어야 pay를 사용할 수 있다.
// TSC의 중요한 점은 사용하는 범위를 줄여 나가는 것이다...!
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}
