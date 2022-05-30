import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import RandomGreeting from './RandomGreeting';

const Views = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/greetings/random" element={<RandomGreeting />} />
    </Routes>
  )
}

export default Views