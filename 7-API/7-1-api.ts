Array;

type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];

const result = students.every((student) => student.passed); // 모든 결과값이 true인 경우 true를 반환
console.log(result);

class Animal {}

class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
// 이런거다. return 에서 true가 나온다면 animal은 Cat class임! 하고 정해준다.
animals.every<Cat>(isCat);
