import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import AddForm from './AddForm';
import TodosList from '../containers/TodosList';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <div className="container app-wrapper">
          <Counter />
          <AddForm />
          <TodosList />
        </div>
        <Footer />
      </div>
    )
  }
}
