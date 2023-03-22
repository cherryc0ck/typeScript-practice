// interface Queue {
//   readonly size: number;
//   push(value: string): void;
//   shift(): string;
// }

// type QueueNode = {
//   value: string;
//   next?: QueueNode;
// }

// class QueueImpl implements Queue {
//   private _size: number = 0;
//   private head?: QueueNode;

//   constructor(private capacity: number) {}

//   get size(): number {
//     return this._size;
//   }

//   push(value: string): void {
//     if (this.size >= this.capacity) {
//       throw new Error('사이즈 초과');
//     }

//     if (this.size === 0) {
//       const node: QueueNode = { value, next: this.head };
//       this.head = node;
//     }

//     const node: QueueNode = { value: "dd", next: value}
    
    
//     this._size++;
//   }

//   shift(): string {
//     if (this.head == null) {
//       throw new Error('에러');  
//     }
//     const node = this.head;
//     this.head = node.next;
//     this._size--;
//     return node.value
//   }
// }

// const queue = new QueueImpl();