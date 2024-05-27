import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LoginSignup from './Components/LoginSignup';
import Donation from './Components/Donation';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/app" element={<App />} />
        <Route path='/donation'element={<Donation/>}/>
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
