import React from 'react';
import ReactDOM from 'react-dom';

// React Router DOM.
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'

  // Root.
import {
    Root
  } from './components/Root';

import App from './App';
import * as serviceWorker from './serviceWorker';

// Render.
ReactDOM.render(
    <Router>
      <Root>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Root>
    </Router>
  , document.querySelector('#app'))

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
