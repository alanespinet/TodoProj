import React, { Component } from 'react';

class Todo extends Component {

  render(){
    return (
      <div className="single-todo">
        <p>{ this.props.todoDescription }</p>
      </div>
    )
  }
}

export default Todo;
