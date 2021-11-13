import React from "react";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import FilterTodo from "./components/FilterTodo";
import ListTodo from "./components/ListTodo";
import todoService from "./services/todoService";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: todoService.getTodos(), selectedFilter: "all" };
  }

  handleAddTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now(), completed: false };
    const todos = [newTodo, ...this.state.todos];

    todoService.saveTodos(todos);
    this.setState({ todos });
  };

  handleClearAll = () => {
    todoService.deleteAllTodos();
    this.setState({ todos: [] });
  };

  handleFilterChange = (newFilter) => {
    const { selectedFilter } = this.state;
    if (newFilter === selectedFilter) return;

    let todos = todoService.getTodos();

    switch (newFilter) {
      case "completed":
        todos = todos.filter((todo) => todo.completed);
        break;

      case "uncompleted":
        todos = todos.filter((todo) => !todo.completed);
        break;

      default:
        break;
    }

    this.setState({ todos, selectedFilter: newFilter });
  };

  render() {
    const { todos, selectedFilter } = this.state;

    return (
      <div className="container">
        <Header onClearAll={this.handleClearAll} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
        <FilterTodo
          selectedFilter={selectedFilter}
          onChange={this.handleFilterChange}
        />
        <ListTodo todos={todos} />
      </div>
    );
  }
}

export default App;
