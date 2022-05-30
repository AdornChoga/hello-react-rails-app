import React from 'react';
import Views from './Views';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  )
}

export default App;