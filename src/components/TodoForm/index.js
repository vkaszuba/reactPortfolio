import React from 'react';

const TodoForm = props => (
  <form>
    <div className="form-group">
      <label for="todoList">Todos</label>

      {/* Links todoInput array, and allows text in the box to change */}
      <input
        onChange={props.handleInputChange}
        value={props.todoInput}
        className="form-control"
        id="todoList"
      />
    </div>

    {/* Submit button */}
    <button
      className="btn btn-primary"
      onClick={props.handleSubmit}>
      Submit
    </button>

  </form>
);

export default TodoForm;