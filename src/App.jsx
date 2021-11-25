import React, { useState } from "react";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import FilterTodo from "./components/FilterTodo";
import ListTodo from "./components/ListTodo";
import todoService from "./services/todoService";

// Function component

// const App = () => {
//   const savedTodos = todoService.getTodos();
//   const [todos, setTodos] = useState(savedTodos);
//   const [selectedFilter, setSelectedFilter] = useState("all");

//   const handleAddTodo = (todo) => {
//     const newTodo = { ...todo, id: Date.now(), completed: false };
//     const updatedTodos = [newTodo, ...savedTodos];

//     setSelectedFilter("all");

//     todoService.saveTodos(updatedTodos);
//     setTodos(updatedTodos);
//   };

//   const handleClearAll = () => {
//     setSelectedFilter("all");

//     todoService.deleteAllTodos();
//     setTodos([]);
//   };

//   const handleFilterChange = ({ filteredTodos, newFilter }) => {
//     setSelectedFilter(newFilter);
//     setTodos(filteredTodos);
//   };

//   const handleUpdatedTodos = (todos) => {
//     todoService.saveTodos(todos);
//     setTodos(todos);
//   };

//   return (
//     <main className="container">
//       <Header onClearAll={handleClearAll} />
//       <AddTodoForm onAddTodo={handleAddTodo} />

//       {!!savedTodos.length && (
//         <FilterTodo
//           savedTodos={savedTodos}
//           selectedFilter={selectedFilter}
//           onFilterChange={handleFilterChange}
//         />
//       )}

//       <ListTodo todos={todos} onUpdate={handleUpdatedTodos} />
//     </main>
//   );
// };

// Class component

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: todoService.getTodos(), selectedFilter: "all" };
  }

  handleAddTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now(), completed: false };
    const updatedTodos = [newTodo, ...this.state.todos];

    todoService.saveTodos(updatedTodos);
    this.setState({ todos: updatedTodos, selectedFilter: "all" });
  };

  handleClearAll = () => {
    todoService.deleteAllTodos();
    this.setState({ todos: [], selectedFilter: "all" });
  };

  handleFilterChange = ({ newFilter }) => {
    this.setState({ selectedFilter: newFilter });
  };

  handleUpdatedTodos = (todos) => {
    todoService.saveTodos(todos);
    this.setState({ todos });
  };

  render() {
    const { selectedFilter, todos } = this.state;
    const filteredTodos = todoService.getFilteredTodos({
      selectedFilter,
      todos,
    });

    return (
      <main className="container">
        <Header onClearAll={this.handleClearAll} />

        <AddTodoForm onAddTodo={this.handleAddTodo} />

        {!!todos.length && (
          <FilterTodo
            selectedFilter={selectedFilter}
            onFilterChange={this.handleFilterChange}
          />
        )}

        <ListTodo
          todos={todos}
          filteredTodos={filteredTodos}
          onUpdate={this.handleUpdatedTodos}
        />
      </main>
    );
  }
}

export default App;
