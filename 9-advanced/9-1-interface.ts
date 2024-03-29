type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

// Object
const obj1: PositionType = {
    x: 1,
    y: 1,
};

const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
};

// Class
class pos1 implements PositionType {
    x: number;
    y: number;
}

class pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;

}

// Extends
interface ZPositionInterface extends PositionInterface {
    z: number;
}

type ZPositonType = PositionType & {z: number};

// only interfaces can be merged.
interface PositionInterface {
    z: number;
}

// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}

type Name = Person['name'];