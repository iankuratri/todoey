const key = "todos";

const getTodos = () => {
  const stringifiedTodos = localStorage.getItem(key);

  if (!stringifiedTodos) return [];

  const todos = JSON.parse(stringifiedTodos);
  return todos;
};

const saveTodos = (todos) => {
  const stringifiedTodos = JSON.stringify(todos);

  localStorage.setItem(key, stringifiedTodos);
};
