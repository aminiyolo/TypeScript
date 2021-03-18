{
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    class EitherImpl<L, R> implements Either<L, R> {
        constructor(private leftValue: L, private rightValue: R) {}
        left(): L {
            return this.leftValue;
        }

        right(): R {
            return this.rightValue;
        }
    }

    const either = new EitherImpl({name: 'park'}, 3);
    console.log(either.left());
    console.log(either.right());
}