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

const deleteAllTodos = () => {
  localStorage.removeItem(key);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTodos, saveTodos, deleteAllTodos };
