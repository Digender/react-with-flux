import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { render } from 'react-dom';
// import AboutPage from "./components/AboutPage";
import App from "./components/App";
// import Homepage from "./components/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
