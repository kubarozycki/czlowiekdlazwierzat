import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from './Login';
import '../Styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Login />

        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
