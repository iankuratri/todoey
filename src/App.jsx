import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        name: "Learn React",
        priority: "High",
      },
      {
        id: 2,
        name: "Learn Node.js",
        priority: "Medium",
      },
      {
        id: 3,
        name: "Make React Projects",
        priority: "Medium",
      },
    ],
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <header className="block block-header">
          <h1 className="header__brand">Todoey!</h1>
          <button className="btn btn--primary">Clear All</button>
        </header>

        <section className="block block-form">
          <form>
            <div className="form-control">
              <label htmlFor="name">Todo</label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Add Task"
              />
            </div>

            <div className="form-control">
              <label htmlFor="priority">Priority</label>
              <select className="select" name="priority">
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>

            <button className="btn btn--primary btn--block btn-add">Add</button>
          </form>
        </section>

        <section className="block block-filters">
          <div className="filter-buttons">
            <button className="btn btn--primary">All</button>
            <button className="btn btn--primary">Completed</button>
            <button className="btn btn--primary">Uncompleted</button>
          </div>
        </section>

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
      </div>
    );
  }
}

export default App;
