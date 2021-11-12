import React from "react";

class AddTodo extends React.Component {
  state = {
    formValue: { name: "", priority: "" },
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const formValue = { ...this.state.formValue };
    formValue[input.name] = input.value;

    this.setState({ formValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isFormInvalid = this.validateForm();
    if (isFormInvalid) return;

    this.doSubmit();
  };

  validateForm = () => {
    const { name, priority } = this.state.formValue;
    const errors = {};

    if (!name) {
      errors.name = "Todo is required.";
    }
    if (!priority) {
      errors.priority = "Priority is required.";
    }

    this.setState({ errors });

    if (errors.name || errors.priority) return errors;
    return null;
  };

  doSubmit = () => {
    const { formValue } = this.state;
    console.log(formValue);
  };

  render() {
    const { name, priority } = this.state.errors;

    return (
      <section className="block block-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Todo</label>
            <input
              className="input"
              type="text"
              name="name"
              maxLength="128"
              placeholder="Add Task"
              onChange={this.handleChange}
            />
            {name && <p className="invalid-input">{name}</p>}
          </div>

          <div className="form-control">
            <label htmlFor="priority">Priority</label>
            <select
              className="select"
              name="priority"
              onChange={this.handleChange}
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {priority && <p className="invalid-input">{priority}</p>}
          </div>

          <button className="btn btn--primary btn--block btn-add">Add</button>
        </form>
      </section>
    );
  }
}

export default AddTodo;
