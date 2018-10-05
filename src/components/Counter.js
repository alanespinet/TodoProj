import React from 'react';
import { connect } from 'react-redux';

const Counter = props => (
  <div className="counter">
    <p><strong>{ props.todos_count }</strong> { `item${props.todos_count !== 1 ? 's' : ''} in list` } - <strong>{ props.completed }</strong> completed</p>
  </div>
);

const mapStateToProps = state => ({
  todos_count: state.todos.length,
  completed: state.todos.filter( t => t.completed ).length
});

export default connect(mapStateToProps)(Counter);
