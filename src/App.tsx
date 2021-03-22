import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
      <GlobalStyle/>
    </div>
  );
}

export default App;
