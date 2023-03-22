{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  };

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  }

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}

    get size(): number {
      return this._size;
    }

    push(value: string): void {
      if (this.capacity === this.size) {
        throw new Error('용량부족');
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error('에러');  
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value
    }
  };


  const stack = new StackImpl(6);

  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Jobs 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  };
  console.log('stack', stack);
}