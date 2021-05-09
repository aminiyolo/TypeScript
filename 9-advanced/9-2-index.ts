{
  /**
   * Index Type
   */

  const obj = {
    name: "park",
  };
  obj.name; // park;
  obj["name"]; // park;

  type Person = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Person["name"]; // It is going to be a string type
  type Job = Person["age"]; // It is going to be a number type

  const text: Name = "park";
  type Gender = Person["gender"]; // It is going to be a male or female
  type Keys = keyof Person; // 'name', 'age', 'gender'
  const key: Keys = "age";

  type Animal = {
    name: string;
    gender: Person["gender"]; // 'male', 'female' / We can use only these things as a type
  };

  const animal: Animal = {
    name: "jay",
    gender: "female",
  };
}
