{
    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }

    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: StackNode;
        constructor(private capacity: number) {}
        get size() {
            return this._size; 
        }
        push(value: string) {
            const node: StackNode = { value, next: this.head };
            this.head = node;
            this._size++;
            if(this._size > this.capacity) {
                throw new Error('stack is full !');
            } 
        }
        pop(): string {
            if(this.head == null) {
                throw new Error('Empty !');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }
    const stack = new StackImpl(5);
    stack.push('a');
    stack.push('b');
    stack.push('-');
    stack.push('c');
    stack.push('d');
    console.log(stack.size);
    while(stack.size !== 0) {
        console.log(stack.pop());
    }
}
