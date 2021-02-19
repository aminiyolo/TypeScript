{
    // Type Aliases
    type Text = string;
    const name: string = 'park';
    const address: Text = 'korea';
    type Num = number;
    const age: Num = 8;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'park',
        age: 13,
    };

    // String Literal Types
    type Name = 'name';
    let myName: Name;
    myName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
    type Boal = true;
    const cat: Boal = true;
}