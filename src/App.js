import { getSuggestedQuery } from '@testing-library/react';
import './App.css';
import React from 'react';
import {BrowseRouter as Router, Routes,Route} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/">
          <Route path = "/cart">
        </Routes>
      </Router>
    </div>



  );
   
  
}

export default App;
