const defaultState = [{
  id: '1',
  description: 'Sacar a Yuki',
  status: 'started'
}, {
  id: '2',
  description: 'Sacar a Yuki de nuevo',
  status: 'started'
}];

export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'ADD_TODO':
      return [...state, action.payload];

    default:
      return state;
  }
};
