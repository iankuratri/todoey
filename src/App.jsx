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

  handleFilterChange = ({ filteredTodos, newFilter }) => {
    this.setState({ todos: filteredTodos, selectedFilter: newFilter });
  };

  handleUpdatedTodos = (todos) => {
    todoService.saveTodos(todos);
    this.setState({ todos });
  };

  render() {
    const { todos, selectedFilter } = this.state;

    return (
      <div className="container">
        <Header onClearAll={this.handleClearAll} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
        <FilterTodo
          selectedFilter={selectedFilter}
          onFilterChange={this.handleFilterChange}
        />
        <ListTodo todos={todos} onUpdate={this.handleUpdatedTodos} />
      </div>
    );
  }
}

export default App;
