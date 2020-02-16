import React from 'react';
import LoginForm from './components/LoginForm';
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/protectedFriends'>Friends</Link>
        </nav>
        <Route path='/login' component={LoginForm} />
        <ProtectedRoute exact path='/protectedFriends' component={Friends} />
      </div>
    </Router>
  );
}

export default App;
