import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    const todos = this.props.todos // galing kay app.js kasi props na siya pag napasa dito galing kay app.js

    return todos.map((todo) =>
      <TodoItem
        key={todo.id}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}
        todo={todo}
      />);
    }
}

//Prototypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
