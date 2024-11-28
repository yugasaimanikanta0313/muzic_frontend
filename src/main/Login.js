import React from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css'
import './style.css'
import { Routes, Route, Link } from 'react-router-dom';
import AdminLogin from '../admin/AdminLogin';
import CustomerLogin from './../customer/CustomerLogin';

// export default function Login() {
//   const navigate = useNavigate();

//   const handleAdminLogin = (e) => {
//     e.preventDefault();
//     navigate('/adminlogin');
//   };

//   const handleCustomerLogin = (e) => {
//     e.preventDefault();
//     navigate('/customerlogin');
//   };

//   const handleManagerLogin = (e) => {
//     e.preventDefault();
//     navigate('/managerlogin');
//   };

    export default function MainNavBar({ onAdminLogin,onCustomerLogin}) {
      return (
        <div className='home-container'>
          <nav>
          

                 <li><Link to="/customerlogin">Customer Login</Link></li>
                  {/* <Link to="/recruiterlogin">Recruiter Login</Link> */}
                  <li><Link to="/adminlogin">Admin Login</Link></li>
             
          </nav>
          
          <Routes>
        
        <Route path="/customerlogin" element={<CustomerLogin onCustomererLogin={onCustomerLogin}/>} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        {/* <Route path="/recruiterlogin" element={<RecruiterLogin onRecruiterLogin={onRecruiterLogin}/>} exact /> */}
        
        
      </Routes>
     
    </div>
  );
}