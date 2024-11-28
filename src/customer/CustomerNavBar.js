import React from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'
import CustomerHome from './CustomerHome'
import ViewEvents from './ViewEvents'
import '../main/style.css'
import '../main/form.css'

export default function CustomerNavBar() {
  
const navigate = useNavigate();
const handleLogout = () => {
  localStorage.removeItem('isCustomerLoggedIn');
  localStorage.removeItem('customer');

  navigate('/customerlogin');
  window.location.reload()
};
  return (
    <div>
        
<body>
    <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            <h1>Swara♪</h1>
          </div>
          <div class="menu-items">
            <li><a href="/customerhome">Your Home</a></li>
            <li><a href="/viewevents">Songs</a></li>
            <li><a href = "https://beatbox-music.vercel.app/home">Music API</a></li>

            <li><button className="button" onClick={handleLogout}>Logout</button></li>
            {/* <li><a href="/customerlogin">Login</a></li>
            <li><a href="/registration">Sign Up</a></li> */}
          </div>
        </div>
      </div>
    </nav>
  </body>
        <Routes>
            <Route path="/customerhome" element={<CustomerHome/>}/>
            <Route path="/viewevents" element={<ViewEvents/>}/>
            
        </Routes>

    </div>
  )
}
