export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo
});

export const completeTodo = todo_id => ({
  type: 'COMPLETE_TODO',
  payload: todo_id
});

export const uncompleteTodo = todo_id => ({
  type: 'UNCOMPLETE_TODO',
  payload: todo_id
});

export const deleteTodo = todo_id => ({
  type: 'DELETE_TODO',
  payload: todo_id
});
