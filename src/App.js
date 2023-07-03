

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Product from './Product';
import Details from './Details';
// import AddProduct from './AddProduct';
import Login from './Login';
import NavBar from './NavBar';
import './App.css';

const App = () => {
  return (
    <div>

      <NavBar/>
    <Router>
     

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Details />} />
        {/* <Route path="/add-product" element={<AddProduct />} /> */}
        <Route path="*" element={<Navigate to="/product" />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
