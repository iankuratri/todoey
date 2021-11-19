import React, { useState } from "react";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import FilterTodo from "./components/FilterTodo";
import ListTodo from "./components/ListTodo";
import todoService from "./services/todoService";

// Function component

const App = () => {
  const savedTodos = todoService.getTodos();
  const [todos, setTodos] = useState(savedTodos);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleAddTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now(), completed: false };
    const updatedTodos = [newTodo, ...todos];

    todoService.saveTodos(updatedTodos);
    setTodos(updatedTodos);
  };

  const handleClearAll = () => {
    todoService.deleteAllTodos();
    setTodos([]);
  };

  const handleFilterChange = ({ filteredTodos, newFilter }) => {
    setSelectedFilter(newFilter);
    setTodos(filteredTodos);
  };

  const handleUpdatedTodos = (todos) => {
    todoService.saveTodos(todos);
    setTodos(todos);
  };

  return (
    <main className="container">
      <Header onClearAll={handleClearAll} />
      <AddTodoForm onAddTodo={handleAddTodo} />

      {!!savedTodos.length && (
        <FilterTodo
          savedTodos={savedTodos}
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      )}

      <ListTodo todos={todos} onUpdate={handleUpdatedTodos} />
    </main>
  );
};

// Class component

/**
 
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
    const savedTodos = todoService.getTodos();

    return (
      <main className="container">
        <Header onClearAll={this.handleClearAll} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />

        {!!savedTodos.length && (
          <FilterTodo
            savedTodos={savedTodos}
            selectedFilter={selectedFilter}
            onFilterChange={this.handleFilterChange}
          />
        )}

        <ListTodo todos={todos} onUpdate={this.handleUpdatedTodos} />
      </main>
    );
  }
}

*/

export default App;
