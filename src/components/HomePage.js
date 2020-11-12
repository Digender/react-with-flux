import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="jumbotron">
      <h1>Digender Info Administration</h1>
      <p>React Flux and React Router for Ultra responsive Web apps</p>
      <Link to="/about" className="btn btn-primary">About Page</Link>
    </div>
  )
}

export default Homepage;