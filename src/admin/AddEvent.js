import React, { useState, useRef } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddEvent() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    singer: '',
    description: '',
    date: '',
    location: '',

    file: null
  });

  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('category', formData.category);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('singer', formData.singer); // Append singer
      formDataToSend.append('file', formData.file); // Append the file object

      const response = await axios.post(`${config.url}/createevent`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      if (response.status === 200) {
        setFormData({
          category: '',
          title: '',
          singer: '',
          description: '',
          date: '',
          location: '',
          file: null
        });
        fileInputRef.current.value = ''; // Clear file input field
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className='home-container'>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3 align="center"><u>Add Songs</u></h3>
        <br />
        {message ? <h4 align="center">{message}</h4> : null}
        {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
        <br />
        <div>
          Category
          <input type="text" id="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          Title
          <input type="text" id="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          Singers
          <input type="text" id="singer" value={formData.singer} onChange={handleChange} required />
        </div>
        <div>
          File
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Add</button> {/* Remove onSubmit from the button */}
      </form>
    </div>
  );
}
