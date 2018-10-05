import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import * as actions from '../redux/actions';

class AddForm extends Component {
  // state for handling the form data as 'controlled data'
  state = {
    todoDescription: ''
  };

  // initial focus for input. Wait for the component to mount and then
  // creates enable autofocus to input
  componentDidMount(){
    document.getElementById('todo-description').autofocus = true;
  }

  // not need to bind thanks to 'babel-plugin-transform-class-properties'
  onChangeTodo = e => {
    const value = e.target.value;
    this.setState({ todoDescription: value });
  }

  onAddTodo = e => {
    e.preventDefault();
    const description = this.state.todoDescription.trim();

    // if description not empty, create the todo with status 'started'
    if( description.length > 0 ){
      const status = 'started';

      this.props.addTodo({
        id: uuid(),
        description,
        completed: false
      });

      this.setState({ todoDescription: '' });
      document.getElementById('todo-description').focus();
    } else {
      alert('The Todo can\'t be empty');
    }
  }

  render(){
    return (
      <div className="add-form">
        <form onSubmit={this.onAddTodo}>
          <input
            id="todo-description"
            type="text"
            value={ this.state.todoDescription }
            onChange={ this.onChangeTodo }
            placeholder="Add Todo"
          />

          <button type="button" onClick={this.onAddTodo}>Add</button>
        </form>
      </div>
    );
  }
}

// passing object of functions to connect works like mapDispatchToProps.
// functions pass to props as if they were dispatched
export default connect(null, actions)(AddForm);
