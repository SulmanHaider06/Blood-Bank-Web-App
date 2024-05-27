import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup';
import App from '../App';

function Routes() {
return(
  <div className="Routes">
    <Routes>
      <Route path="/" element={<LoginSignup/>}/>
      </Routes>
    <App/>
  </div>
);
}

export default Routes;