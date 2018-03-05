import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import routes from 'routes';
import createRoutes from 'helpers/createRoutes';
import store from 'helpers/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from 'components/Header';

import './style.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider>
          <div>
            <Header />
            {createRoutes(routes)}
          </div>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
