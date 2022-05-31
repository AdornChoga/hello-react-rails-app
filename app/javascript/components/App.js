import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Views from './Views';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </Provider>
  )
}

export default App;