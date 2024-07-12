import React from 'react';
import './App.css'; 
import Navbar from './components/navbar/Navbar'; 
import Homepage from './components/home/Homepage'; 

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Homepage /> 
    </div>
  );
}

export default App; 
