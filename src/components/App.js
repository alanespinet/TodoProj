import React from 'react';

import Header from './Header';
import Counter from './Counter';
import AddForm from './AddForm';
import TodosList from '../containers/TodosList';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <Counter />
          <AddForm />
          <TodosList />
        </div>
      </div>
    )
  }
}
