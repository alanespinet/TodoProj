const defaultState = [{
  id: '1',
  description: 'Sacar a Yuki',
  completed: true
}, {
  id: '2',
  description: 'Sacar a Yuki de nuevo',
  completed: false
}];

export default ( state = defaultState, action ) => {
  switch( action.type ){
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'COMPLETE_TODO':
      return state.map( t => {
        if( t.id === action.payload){
          return {
            ...t,
            completed: true
          };
        }
        return t;
    });

    case 'UNCOMPLETE_TODO':
      return state.map( t => {
        if( t.id === action.payload){
          return {
            ...t,
            completed: false
          };
        }
        return t;
      });

    case 'DELETE_TODO':
      return state.filter( t => t.id !== action.payload );

    default:
      return state;
  }
};
