import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Notifications } from './Notifications';
function App() {
  return (
    <Router>
      <Route exact path="/" render={()=><h1>Home</h1>}/>
      <Route path="/notifications" component={Notifications}/>
    </Router>
  );
}

export default App;
