import React, { useState } from "react";
import useInput from "../hooks/useInput";

// Function component

const AddTodoForm = ({ onAddTodo: addTodo }) => {
  const [name, bindName, resetName] = useInput("");
  const [priority, bindPriority, resetPriority] = useInput("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate form
    const isFormInvalid = validateForm();
    if (isFormInvalid) return;

    // add todo
    const formValue = { name, priority };
    addTodo(formValue);

    // reset form
    resetForm();
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Todo is required.";
    }
    if (!priority) {
      newErrors.priority = "Priority is required.";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.priority) return newErrors;
    return null;
  };

  const resetForm = () => {
    resetName();
    resetPriority();
  };

  const { name: nameValidation, priority: priorityValidation } = errors;

  return (
    <section className="block block-form">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Todo</label>
          <input
            className="input"
            type="text"
            name="name"
            maxLength="128"
            placeholder="Add Task"
            autoComplete="off"
            {...bindName}
          />
          {nameValidation && <p className="invalid-input">{nameValidation}</p>}
        </div>

        <div className="form-control">
          <label htmlFor="priority">Priority</label>
          <select className="select" name="priority" {...bindPriority}>
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {priorityValidation && (
            <p className="invalid-input">{priorityValidation}</p>
          )}
        </div>

        <button className="btn btn--primary btn--block btn-add">Add</button>
      </form>
    </section>
  );
};

// Class component

/** 

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: { name: "", priority: "" },
      errors: {},
    };
  }

  handleChange = ({ currentTarget: input }) => {
    const formValue = { ...this.state.formValue };
    formValue[input.name] = input.value;

    this.setState({ formValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // validate form
    const isFormInvalid = this.validateForm();
    if (isFormInvalid) return;

    // add todo
    const { onAddTodo: addTodo } = this.props;
    const { formValue } = this.state;
    addTodo(formValue);

    // reset form
    this.resetForm();
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

  resetForm = () => {
    const formValue = { ...this.state.formValue };

    for (const name in formValue) {
      formValue[name] = "";
    }

    this.setState({ formValue });
  };

  render() {
    const { name, priority } = this.state.formValue;
    const { name: nameValidation, priority: priorityValidation } =
      this.state.errors;

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
              autoComplete="off"
              value={name}
              onChange={this.handleChange}
            />
            {nameValidation && (
              <p className="invalid-input">{nameValidation}</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="priority">Priority</label>
            <select
              className="select"
              name="priority"
              value={priority}
              onChange={this.handleChange}
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {priorityValidation && (
              <p className="invalid-input">{priorityValidation}</p>
            )}
          </div>

          <button className="btn btn--primary btn--block btn-add">Add</button>
        </form>
      </section>
    );
  }
}

*/

export default AddTodoForm;
