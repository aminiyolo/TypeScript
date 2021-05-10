{
  type Todo = {
    name: string;
    date: number;
  };

  function todo(todo: Readonly<Todo>) {
    // todo.name = 'abc'   when it's readonly we can not change the contents
  }
}
