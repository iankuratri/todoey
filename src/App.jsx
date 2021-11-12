import React from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import ListTodo from "./components/ListTodo";
import todoService from "./services/todoService";

class App extends React.Component {
  state = {
    todos: [
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
    ],
  };

  handleClearAll = () => {
    todoService.deleteAllTodos();
    this.setState({ todos: [] });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <Header onClearAll={this.handleClearAll} />
        <AddTodo />
        <FilterTodo />
        <ListTodo todos={todos} />
      </div>
    );
  }
}

export default App;
