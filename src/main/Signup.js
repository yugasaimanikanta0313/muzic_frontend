import React, { useState } from 'react';
import axios from 'axios';
import '../main/form.css';
import '../main/style.css';
import config from '../config.js'
import { useNavigate } from 'react-router-dom';

export default function Registration() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state formData by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  // const handleSubmit = async (e) => 
  // {
  //   e.preventDefault();
  //   try 
  //   {
  //     const response = await axios.post(`${config.url}/insertcustomer`, formData);
  //     if (response.status === 200) 
  //     {
  //       //It will set all fields to ""
  //       setFormData({
  //         fullname: '',
  //         gender: '',
  //         dateofbirth: '',
  //         email: '',
  //         password: '',
  //         location: '',
  //         contact: ''
  //       });
  //     }
  //     setMessage(response.data);
  //     setError(''); //set error to ""
  //   } 
  //   catch(error) 
  //   {
  //     setError(error.response.data);
  //     setMessage(''); //set message to ""
  //   }
  // };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${config.url}/insertcustomer`, formData);
    if (response.status === 200) {
      // It will set all fields to ""
      setFormData({
        fullname: '',
        gender: '',
        dateofbirth: '',
        email: '',
        password: '',
        location: '',
        contact: ''
      });
      setMessage(response.data);
      setError('');
      navigate("/customerlogin");
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      setError(error.response.data);
      setMessage(''); // Clear any existing success message
    } else if (error.request) {
      // The request was made but no response was received
      setError('Server is not responding. Please try again later.');
      setMessage(''); // Clear any existing success message
    } else {
      // Something happened in setting up the request that triggered an Error
      setError('An unexpected error occurred. Please try again later.');
      setMessage(''); // Clear any existing success message
    }
  }
};

  
  return (
    <div className='home-container'>
      
      
    {/* Your existing JSX content here */}
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
      <h3 align="center">Sign Up Here!!</h3>
        <div>
          Full Name
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          Gender
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Others</option>
          </select>
        </div>
        <div>
          Date of Birth
          <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          Email
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          Password
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          Location
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          Contact
          <input type="number" id="contact" pattern="[6789][0-9]{9}" placeholder="MUST be 10 digits" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  );
}