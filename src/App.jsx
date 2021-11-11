import React from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import ListTodo from "./components/ListTodo";

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
        <Header />
        <AddTodo />
        <FilterTodo />
        <ListTodo todos={todos} />
      </div>
    );
  }
}

export default App;
