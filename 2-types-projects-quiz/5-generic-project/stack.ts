{
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head?: StackNode<T>;
        constructor(private capacity: number) {}
        get size() {
            return this._size; 
        }
        push(value: T) {
            const node = { value, next: this.head };
            this.head = node;
            this._size++;
            if(this._size > this.capacity) {
                throw new Error('stack is full !');
            } 
        }
        pop(): T {
            if(this.head == null) {
                throw new Error('Empty !');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }
    const stack = new StackImpl<string>(5);
    stack.push('dd');
    stack.push('b');
    stack.push('sd');
    stack.push('c');
    stack.push('d');
    while(stack.size !== 0) {
        console.log(stack.pop());
    }
    const stack2 = new StackImpl<number>(5);
    stack2.push(11);
    stack2.push(77);
    stack2.push(33);
    stack2.push(22);
    stack2.push(55);
    while(stack2.size !== 0) {
        console.log(stack2.pop());
    }
}
