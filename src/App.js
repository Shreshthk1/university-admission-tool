import React from 'react';
import NavBar from './navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';

  
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}
  
export default App;