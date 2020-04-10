import React from 'react';

// Replace this.state with props
const Counter = props => {
  return (
    <div>

      <p>{props.counter}</p>

      <button
        onClick={props.handleIncrement}
        className="btn btn-primary">
        Increment
      </button>

      <button
        onClick={props.handleDecrement}
        className="btn btn-primary">
        Decrement
      </button>

    </div>
  )
};

export default Counter;