import React from "react";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
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

  handleAddTodo = (todo) => {
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
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
        <AddTodoForm onAdd={this.handleAddTodo} />
        <FilterTodo />
        <ListTodo todos={todos} />
      </div>
    );
  }
}

export default App;
