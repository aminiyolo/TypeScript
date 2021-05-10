{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: Todo, partialTodo: Partial<Todo>): Todo {
    return { ...todo, ...partialTodo };
  }

  const todo: Todo = {
    title: "studying",
    description: "typescript",
    label: "study hard",
    priority: "high",
  };

  const result = updateTodo(todo, { label: "keep studying hard" }); // it returns updated object
  console.log(result);
}
