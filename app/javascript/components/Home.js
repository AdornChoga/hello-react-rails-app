import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>
        Welcome to Greetings the app
      </h1>
      <Link to="/greetings/random">Get Random Greeting</Link>
    </div>
  )
}

export default Home;
