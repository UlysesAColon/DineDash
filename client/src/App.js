import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTable from './components/AddTable';
import OrderedItems from './components/OrderedItems/OrderedItems';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />      
          <Container>
            <AddTable />
            <ShoppingList />
          </Container>
          <Container>
          <OrderedItems />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;