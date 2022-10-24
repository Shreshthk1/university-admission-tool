import React from 'react';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';

  
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Login' component={Login} />
      </Routes>
    </Router>
  );
}
  
export default App;