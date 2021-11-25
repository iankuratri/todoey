import React from "react";
import sprite from "../assets/icons/sprite.svg";

// Function component

const ListTodo = ({ todos, filteredTodos, onUpdate: updateTodos }) => {
  const markAsCompleted = (todo) => {
    const todosCopy = [...todos];
    const index = todosCopy.indexOf(todo);
    todosCopy[index] = { ...todo, completed: true };

    updateTodos(todosCopy);
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);

    updateTodos(updatedTodos);
  };

  return (
    <section className="block block-todos">
      <ul className="todo">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo__list">
            <div className={getTodoClasses(todo)}>
              <dt className="todo__name">{todo.name}</dt>
              <dd className="todo__priority">{todo.priority}</dd>
            </div>

            <div className="todo__actions">
              <button
                className="btn btn--primary btn--round"
                disabled={todo.completed}
                onClick={() => markAsCompleted(todo)}
                title="Mark as Done"
              >
                <svg className="icon">
                  <use href={sprite + "#done"}></use>
                </svg>
              </button>
              <button
                className="btn btn--primary btn--round"
                onClick={() => deleteTodo(todo)}
                title="Delete"
              >
                <svg className="icon">
                  <use href={sprite + "#delete"}></use>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const getTodoClasses = ({ completed }) => {
  let classes = "todo__details ";
  if (completed) classes += "todo__completed";
  return classes;
};

// Class component

/** 

class ListTodo extends React.Component {
  markAsCompleted = (todo) => {
    const { todos, onUpdate: updateTodos } = this.props;

    const todosCopy = [...todos];
    const index = todosCopy.indexOf(todo);
    todosCopy[index] = { ...todo, completed: true };

    updateTodos(todosCopy);
  };

  deleteTodo = (todo) => {
    const { todos, onUpdate: updateTodos } = this.props;

    const updatedTodos = todos.filter((t) => t.id !== todo.id);

    updateTodos(updatedTodos);
  };

  render() {
    const { filteredTodos } = this.props;

    return (
      <section className="block block-todos">
        <ul className="todo">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="todo__list">
              <div className={this.getTodoClasses(todo)}>
                <dt className="todo__name">{todo.name}</dt>
                <dd className="todo__priority">{todo.priority}</dd>
              </div>

              <div className="todo__actions">
                <button
                  className="btn btn--primary btn--round"
                  disabled={todo.completed}
                  onClick={() => this.markAsCompleted(todo)}
                  title="Mark as Done"
                >
                  <svg className="icon">
                    <use href={sprite + "#done"}></use>
                  </svg>
                </button>
                <button
                  className="btn btn--primary btn--round"
                  onClick={() => this.deleteTodo(todo)}
                  title="Delete"
                >
                  <svg className="icon">
                    <use href={sprite + "#delete"}></use>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  getTodoClasses = ({ completed }) => {
    let classes = "todo__details ";
    if (completed) classes += "todo__completed";
    return classes;
  };
}

*/

export default ListTodo;
