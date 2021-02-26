import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import store from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home/>
      </Provider>
      <GlobalStyle/>
    </div>
  );
}

export default App;
