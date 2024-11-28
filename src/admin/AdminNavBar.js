import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../main/style.css";
import "../main/form.css";

import AdminHome from "./AdminHome";
import AddEvent from "./AddEvent";
import ViewCustomers from "./ViewCustomers";
import ViewCustomerProfile from "./ViewCustomerProfile";
import ViewEvents from "../customer/ViewEvents";

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("admin");
    navigate("/adminlogin");
    window.location.reload();
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
                <li>
                  <a href="/adminhome">Admin Home</a>
                </li>
                <li>
                  <a href="/addevent">Add songs</a>
                </li>
                <li>
                  <a href="/viewevents">View songs</a>
                </li>
                <li>
                  <a href="/viewcustomers">View Customers</a>
                </li>

                <li>
                  <button className="button" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </body>
      <Routes>
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/viewcustomers" element={<ViewCustomers />} />
        <Route path="/viewevents" element={<ViewEvents />} />
        <Route
          path="/viewcustomerprofile/:email"
          element={<ViewCustomerProfile />}
          exact
        />
      </Routes>
    </div>
  );
}
