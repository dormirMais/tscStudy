// Java: Exception class가 존재
// JS: Error로 처리

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist") {
    throw new Error(`file not exis! ${fileName}`);
  }

  return "file contents";
}

function closeFile(file: string) {}

const fileName = "not exist";

try {
  console.log(readFile(fileName)); //이렇게 에러가 발생할 가능성이 있는 구간은 try, catch문을 사용한다.
} catch (error) {
  console.log("catched"); // 이부분에서 catch를 해서 동작을 수행해도 그 뒤의 코드들을 쭉 읽어나간다.
} finally {
  // finally의 경우 무조건 실행한다.
  closeFile(fileName);
  console.log("finally");
}

// 동작의 로직을 생각하고 finally를 이용해서 error가 발생해도 꼭 수행해야하는 동작이 있다면 동작을 수행해주어야한다.
// 또한 try catch finally에 무지성으로 모든 코드를 집어넣는 것이 아니라 꼭 필요한 부분에서만 사용해야한다.
console.log("!!!");
