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
        <header>
          <h1>Todoey!</h1>
          <button>Clear All</button>
        </header>

        <section>
          <form>
            <div className="form-control">
              <label htmlFor="name">Todo</label>
              <input type="text" name="name" placeholder="Add Task" />
            </div>

            <div className="form-control">
              <label htmlFor="priority">Priority</label>
              <select name="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </form>

          <button>Add</button>
        </section>

        <section>
          <div className="filter-buttons">
            <button>All</button>
            <button>Completed</button>
            <button>Uncompleted</button>
          </div>

          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="todo">
                <div>
                  <dt>{todo.name}</dt>
                  <dd>{todo.priority}</dd>
                </div>

                <div>
                  <button>&#10004;</button>
                  <button>&#10008;</button>
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
