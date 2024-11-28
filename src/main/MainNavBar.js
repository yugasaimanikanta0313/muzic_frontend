import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Signup from './Signup'
import AdminLogin from '../admin/AdminLogin';
import CustomerLogin from '../customer/CustomerLogin';
import '../config.js'

export default function MainNavBar({ onAdminLogin, onCustomerLogin }) {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <h1>Swara♪</h1>
            </div>
            <div class="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/adminlogin"> Admin Login</a></li>
            <li><a href="/customerlogin">Customer Login</a></li>
            <li><a href="/signup">Customer Signup</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin} />} />
        <Route path="/customerlogin" element={<CustomerLogin onCustomerLogin={onCustomerLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}
