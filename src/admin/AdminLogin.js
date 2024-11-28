import React, { useState } from "react";
import "../main/form.css";
import "../main/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config.js";

export default function AdminLogin({ onAdminLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.url}/checkadminlogin`,
        formData
      );
      if (response.data != null) {
        onAdminLogin();

        localStorage.setItem("admin", JSON.stringify(response.data));
        alert("Login Successfull!");
        navigate("/adminhome");
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <h3 align="center">
          <u>Admin Login</u>
        </h3>
        {message ? (
          <h4 align="center">{message}</h4>
        ) : (
          <h4 align="center" style={{ color: "red" }}>
            {error}
          </h4>
        )}
        <br />
        <br />
        <div>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button onSubmit={handleSubmit} type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}
