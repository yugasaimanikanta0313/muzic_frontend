import React from 'react'
import './style.css'
import musicicon from '../images/musicicon.png'
import image from '../images/image.png'
import musicok from '../images/musicok.png'

export default function Home() {
  return (
    <div className="home-container">
        {/* <h4 align="center">Welcome</h4> */}
        <head>
        <title className='title'>Music Streaming App</title>
        </head>
        <img src={musicicon} alt="Home Page Image" className='img'/>
        
    </div>
  )
}