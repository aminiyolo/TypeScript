{
  type Video = {
    name: string;
    author: string;
  };

  type Optional<T> = {
    [K in keyof T]?: T[K]; // for ... in
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animalOptional: Optional<Animal> = {
    name: "dog",
  };
  animalOptional.name = "cat"; // In this case, We can change the name

  type Readonly<T> = {
    readonly [K in keyof T]: T[K];
  };

  const readonlyAnimal: Readonly<Animal> = {
    name: "duck",
    age: 3,
  };
  /**
   * readonlyAnimal.name = 'cow' // In this case, It doesn't work because it's readonly
   * */

  type Nullable<T> = { [K in keyof T]: T[K] | null };

  const nullAbleAnimal: Nullable<Animal> = {
    name: "bird",
    age: null, // We can use null
  };
}
