import React from 'react';
import { connect } from 'react-redux';

const Counter = props => (
  <div className="counter">
    <p><strong>{ props.todos_count }</strong> { `item${props.todos_count !== 1 ? 's' : ''} left` }</p>
  </div>
);

const mapStateToProps = state => ({
  todos_count: state.todos.length
});

export default connect(mapStateToProps)(Counter);
