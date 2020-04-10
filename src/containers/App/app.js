import React, { Component } from 'react';
import Counter from './../../components/Counter'
import TodoForm from './../../components/TodoForm'
import ListItems from './../../components/ListItems'
// You don't need to add the js file name if it's index.js

class App extends Component {
  // Items that change dynamically based off code below
  // Cannot make single variables outside of a state array, it has to be named STATE
  state = {
    counter: 0,
    todos: ['Do laundry', 'Feed cats', 'Wash dishes'],
    todoInput: ""
  };

  // Increase and decrease onClick functions
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  // Allows todoInput to be changed on the form, without this you can't type in text box
  handleInputChange = event => {
    // const value = event.target.value
    // const { target: { value } } = event
    const { value } = event.target;
    this.setState({ todoInput: value });
  };

  // Prevents page refresh on Submit click
  handleSubmit = event => {
    event.preventDefault();
    // Adds a new item to todos
    const todos = [...this.state.todos, this.state.todoInput];
    // Resets input text to empty, after submit
    this.setState({ todos, todoInput: "" });
  };

  // Renders the HTML you see
  // Have to run console.log before return, or you won't see it
  render() {
    return (
      <div className="container">

        {/* Shows the current count number on page, and its buttons */}
        <Counter
          counter={this.state.counter}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />

        {/* Shows the todo form info */}
        <TodoForm
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          todoInput={this.state.todoInput}
        />

        {/* List of todo items, shown on page */}
        <ListItems
          items={this.state.todos}
        />

      </div>
    );

    // Closing Render and App tags
  };
};

export default App;