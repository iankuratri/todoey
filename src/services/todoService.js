const key = "todos";

// eslint-disable-next-line no-unused-vars
const sampleTodos = [
  {
    id: 1,
    name: "Learn React",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    name: "Learn Node.js",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    name: "Make React Projects",
    priority: "Medium",
    completed: false,
  },
];

const getTodos = () => {
  const stringifiedTodos = localStorage.getItem(key);

  if (!stringifiedTodos) {
    // save default todos and return them
    saveTodos(sampleTodos);
    return sampleTodos;
  }

  const todos = JSON.parse(stringifiedTodos);
  return todos;
};

const saveTodos = (todos) => {
  const stringifiedTodos = JSON.stringify(todos);

  localStorage.setItem(key, stringifiedTodos);
};

const deleteAllTodos = () => {
  // replace saved todos with empty array
  saveTodos([]);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTodos, saveTodos, deleteAllTodos };
