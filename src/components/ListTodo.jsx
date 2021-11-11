import React from "react";

class ListTodo extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <section className="block block-todos">
        <ul className="todo">
          {todos.map((todo) => (
            <li key={todo.id} className="todo__list">
              <div className="todo__details">
                <dt className="todo__name">{todo.name}</dt>
                <dd className="todo__priority">{todo.priority}</dd>
              </div>

              <div className="todo__actions">
                <button className="btn btn--primary btn--round">
                  &#10004;
                </button>
                <button className="btn btn--primary btn--round">
                  &#10008;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ListTodo;
