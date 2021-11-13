import React from "react";
import sprite from "../assets/icons/sprite.svg";

class ListTodo extends React.Component {
  constructor(props) {
    super(props);

    this.updateTodos = this.props.onUpdate;
  }

  markAsCompleted = (todo) => {
    const todos = [...this.props.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo, completed: true };

    this.updateTodos(todos);
  };

  deleteTodo = (todo) => {
    const currentTodos = this.props.todos;
    const todos = currentTodos.filter((t) => t.id !== todo.id);

    this.updateTodos(todos);
  };

  render() {
    const { todos } = this.props;

    return (
      <section className="block block-todos">
        <ul className="todo">
          {todos.map((todo) => (
            <li key={todo.id} className="todo__list">
              <div className={this.getTodoClasses(todo)}>
                <dt className="todo__name">{todo.name}</dt>
                <dd className="todo__priority">{todo.priority}</dd>
              </div>

              <div className="todo__actions">
                <button
                  className="btn btn--primary btn--round"
                  onClick={() => this.markAsCompleted(todo)}
                >
                  <svg className="icon">
                    <use href={sprite + "#done"}></use>
                  </svg>
                </button>
                <button
                  className="btn btn--primary btn--round"
                  onClick={() => this.deleteTodo(todo)}
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

export default ListTodo;
