import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Todo from '../components/Todo';

class TodosList extends Component {

  render(){
    // conditionally render the Todos List depending on the amount of
    // todos available in the store
    return this.props.todos.length > 0 && (
      <div className="todos-list">
        <ul>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout="300"
            transitionLeaveTimeout="300"
          >
            { this.props.todos.map( t => (
              <li key={t.id} className={`${t.completed ? 'completed' : ''}`}>
                <Todo
                  id={t.id}
                  todoDescription={t.description}
                  completed={t.completed}
                />
              </li>
            )) }
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodosList);
