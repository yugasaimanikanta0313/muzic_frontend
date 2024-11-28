import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../main/form.css'
import '../main/style.css'
import config from '../config.js'

export default function CustomerLogin({onCustomerLogin}) 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkcustomerlogin`, formData);
      if (response.data != null) 
      {
        onCustomerLogin();

        localStorage.setItem('customer', JSON.stringify(response.data));

        navigate("/customerhome");
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div className='home-container'>
      
      <form onSubmit={handleSubmit}>
      <h3 align="center"><u>Customer Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <br/><br/>
        <div>
          Email
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
         Password
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" onSubmit={handleSubmit} className="button">Login</button>
      </form>
    </div>
  );
}