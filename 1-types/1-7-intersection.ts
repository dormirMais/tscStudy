{
  // intersection Type:  &의 개념과 가깝다.

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    // 이런식으로 다양한 타입들을 하나로 묶어서 선언을 할 수가 있다.
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    // 위에서 intersection을 사용해서 다양한 타입을 하나로 묶어주었기 때문에 이렇게 모든 요소들을 다 적어 주어야 한다.
    name: "haki",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
