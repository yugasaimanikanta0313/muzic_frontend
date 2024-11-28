import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../main/form.css";
import "../main/style.css";
import config from "../config.js";

export default function ViewCustomers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcustomers`);
      setCustomers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = async (email) => {
    try {
      await axios.delete(`${config.url}/deletecustomers/${email}`);
      fetchCustomers();
    } catch (error) {
      console.error(error.message);
    }
  };

  const viewCustomer = async (email) => {
    try {
      navigate(`/viewcustomerprofile/${email}`);
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="home-container">
      <table
        border={1}
        align="center"
        style={{ width: "auto", height: "auto" }}
      >
        <thead>
          <tr align="center">
            <h1 align="center">Customers</h1>
          </tr>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Location</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(customers) && customers.length > 0 ? (
            customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.fullname}</td>
                <td>{customer.gender}</td>
                <td>{customer.dateofbirth}</td>
                <td>{customer.email}</td>
                <td>{customer.location}</td>
                <td>{customer.contact}</td>
                <td>
                  <button
                    type="submit"
                    onClick={() => viewCustomer(customer.email)}
                    className="button"
                  >
                    View
                  </button>
                  <button
                    type="submit"
                    onClick={() => deleteCustomer(customer.email)}
                    className="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" align="center">
                Data Not Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
