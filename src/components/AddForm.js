import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddForm extends Component {
  // state for handling the form data as 'controlled data'
  state = {
    todo: ''
  };

  // not need to bind thanks to 'babel-plugin-transform-class-properties'
  onChangeTodo = e => {
    const value = e.target.value;
    this.setState({ todo: value });
  }

  render(){
    return (
      <div className="add-form">
        <form>
          <input
            type="text"
            value={ this.state.todo }
            onChange={ this.onChangeTodo }
          />

          <button type="button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
