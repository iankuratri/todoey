import React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <section className="block block-form">
        <form>
          <div className="form-control">
            <label htmlFor="name">Todo</label>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Add Task"
            />
          </div>

          <div className="form-control">
            <label htmlFor="priority">Priority</label>
            <select className="select" name="priority">
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>

          <button className="btn btn--primary btn--block btn-add">Add</button>
        </form>
      </section>
    );
  }
}

export default AddTodo;
