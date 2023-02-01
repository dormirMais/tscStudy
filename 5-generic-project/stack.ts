interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  value: T;
  next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}
  get size() {
    //interface 에서 readonly로 지정을 했기 때문에 getter로 만듬.
    return this._size;
  }
  push(value: T) {
    if (this.size === this.capacity) throw new Error("stack is full");
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(100);
stack.push("haki");
stack.push("poki");
stack.push("ponki");
while (stack.size !== 0) {
  console.log(stack.pop());
}
const stack2 = new StackImpl<number>(100);
stack2.push(123);
stack2.push(234);
stack2.push(345);
while (stack.size !== 0) {
  console.log(stack2.pop());
}
