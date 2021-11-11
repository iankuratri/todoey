import React from "react";

class FilterTodo extends React.Component {
  render() {
    return (
      <section className="block block-filters">
        <div className="filter-buttons">
          {/* Toggle btn--outline on selection */}
          <button className="btn btn--primary btn--outline">All</button>
          <button className="btn btn--primary btn--outline">Completed</button>
          <button className="btn btn--primary btn--outline">Uncompleted</button>
        </div>
      </section>
    );
  }
}

export default FilterTodo;
