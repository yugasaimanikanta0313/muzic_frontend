//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import CustomerNavBar from "./customer/CustomerNavBar";
import './main/style.css'
import './main/form.css'
  
export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const customerLoggedIn = localStorage.getItem('isCustomerLoggedIn') === 'true';
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsCustomerLoggedIn(customerLoggedIn);

  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onCustomerLogin = () => {
    localStorage.setItem('isCustomerLoggedIn', 'true');
    setIsCustomerLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isCustomerLoggedIn ? (
          < CustomerNavBar />
        ) : (
          <MainNavBar
            onAdminLogin={onAdminLogin}
            onCustomerLogin={onCustomerLogin}
           
          />
        )}
      </Router>
    </div>
  );
}