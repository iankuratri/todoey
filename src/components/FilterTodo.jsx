import React from "react";

class FilterTodo extends React.Component {
  constructor(props) {
    super(props);

    this.filterButtons = ["all", "completed", "uncompleted"];
    this.updateTodos = props.onFilterChange;
  }

  filterChanged = (newFilter) => {
    const { selectedFilter, savedTodos } = this.props;
    if (newFilter === selectedFilter) return;

    let filteredTodos = [];

    switch (newFilter) {
      case "completed":
        filteredTodos = savedTodos.filter((todo) => todo.completed);
        break;

      case "uncompleted":
        filteredTodos = savedTodos.filter((todo) => !todo.completed);
        break;

      default:
        filteredTodos = savedTodos;
        break;
    }

    this.updateTodos({ filteredTodos, newFilter });
  };

  render() {
    return (
      <section className="block block-filters">
        <div className="filter-buttons">
          {this.filterButtons.map((buttonName) => (
            <button
              key={buttonName}
              className={this.getButtonClasses(buttonName)}
              onClick={() => this.filterChanged(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </section>
    );
  }

  getButtonClasses = (buttonName) => {
    const { selectedFilter } = this.props;

    let classes = "btn btn--primary titlecase ";
    if (buttonName !== selectedFilter) classes += "btn--outline";

    return classes;
  };
}

export default FilterTodo;
