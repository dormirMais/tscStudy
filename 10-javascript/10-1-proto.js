const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.__proto__ === y.__proto__); //true

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // this.makeCoffee = (shots) => {
  //   console.log("making...");
  // };
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making~~~");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(10);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype); //LatteMachine의 prototype으로 CoffeeMachine의 prototype을 지정해준다.

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee(); // 위에서 LatteMachine의 prototype을 변경해 주었기 때문에 CoffeMachine의 prototype에 있는 함수를 사용이 가능하다.
