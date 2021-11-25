import React from "react";

class FilterTodo extends React.Component {
  filterButtons = ["all", "completed", "uncompleted"];

  filterChanged = (newFilter) => {
    const { selectedFilter, onFilterChange } = this.props;
    if (newFilter === selectedFilter) return;

    onFilterChange(newFilter);
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
