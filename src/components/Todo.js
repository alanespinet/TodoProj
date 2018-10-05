import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import store from '../redux/store/store';

class Todo extends Component {

  onCompleteClick = e => {
    const completed = this.props.completed;
    const id = this.props.id;

    if( completed ){
      this.props.uncompleteTodo(id);
    } else {
      this.props.completeTodo(id);
    }
  }

  onDeleteClick = e => {
    e.preventDefault();
    const id = this.props.id;

    if(confirm('Are you sure that you want to remove this Todo?')){
      this.props.deleteTodo(id);
    }
  }

  render(){
    return (
      <div className="single-todo">
        <input
          type="checkbox"
          className="single-todo__completed-input"
          checked={ this.props.completed ? 'checked' : '' }
          onChange={this.onCompleteClick}
        />
        <p>{ this.props.todoDescription }</p>
        { this.props.completed && <p className="single-todo__completed-text">- Completed -</p> }

        <button type="button" className="destroy" onClick={this.onDeleteClick}>Remove</button>
      </div>
    )
  }
}

// passing object of functions to connect works like mapDispatchToProps.
// functions pass to props as if they were dispatched
export default connect(null, actions)(Todo);
