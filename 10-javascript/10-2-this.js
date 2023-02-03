// JS에서의 this는 호출한 주체의 문맥을 의미한다. 그래서 JS의 this가 좀 복잡데스...

console.log(this); //이 경우에는 window가 this

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // 이 경우에도 window가 출력된다. 왜냐하면 window가 simpleFunc를 불러왔기 때문이다.
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // 이경우에는 Counter가 this가 된다...
const caller = counter.increase;
caller(); //이경우에는 undefined가 나오는데 그 이유는 let과 const 로 선언된 변수는 윈도우에 등록이 되어있지 않아서라고한다...
// caller를 호출하는 것은 어떤 obj도 아니다. 따라서 undefined가 호출하는 것과 동일하다.
// 함수의 경우는 기본적으로 window에 등록이 된다.
// 반면 const나 let으로 선언을 하게 되면 선언된 변수는 window에 등록되지 않는다.
// var의 경우는 window에 등록이 된다고 한다.
