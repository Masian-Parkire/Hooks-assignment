

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Product from './Product';
import Detailspage from './Details';
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
        <Route path="/details" element={<Detailspage />} />
        <Route path="/product/:productId" element={<Detailspage />} />
        {/* <Route path="/add-product" element={<AddProduct />} /> */}
        <Route path="*" element={<Navigate to="/details" />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
