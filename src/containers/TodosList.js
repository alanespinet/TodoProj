import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';

class TodosList extends Component {

  render(){
    // conditionally render the Todos List depending on the amount of
    // todos available in the store
    return this.props.todos.length > 0 && (
      <div className="todos-list">
        <ul>
          { this.props.todos.map( t => (
            <li key={t.id}>
              <Todo todoDescription={t.description} />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodosList);
