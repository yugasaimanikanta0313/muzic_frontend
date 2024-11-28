// customerhome.js
import React from 'react';
// import CustomerNavBar from './CustomerNavBar';
import '../main/form.css';

export default function CustomerHome() {
  // const handleLogout = () => {
  //   localStorage.removeItem('isCustomerLoggedIn');
  //   localStorage.removeItem('customer');
  //   window.location.reload();
  // };

  return (
    <div>
      {/* <CustomerNavBar handleLogout={handleLogout} /> */}
      <div className="home-container">
        <h3>I am in CustomerHome page</h3>
      </div>
    </div>
  );
}
