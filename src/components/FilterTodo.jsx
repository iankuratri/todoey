import React from "react";

class FilterTodo extends React.Component {
  filterButtons = ["all", "completed", "uncompleted"];

  render() {
    const { onChange } = this.props;

    return (
      <section className="block block-filters">
        <div className="filter-buttons">
          {this.filterButtons.map((buttonName) => (
            <button
              key={buttonName}
              className={this.getButtonClasses(buttonName)}
              onClick={() => onChange(buttonName)}
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
