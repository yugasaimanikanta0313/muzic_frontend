import React from 'react'
import musicicon from '../images/musicicon.png'

export default function About() {
  return (
    <div className="home-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={musicicon} alt="Music App Icon" style={{ width: '50px', height: '50px' }} />
      </div>
      <h4 style = {{color : "purple"}}align="center">About Music App</h4>
      <table style={{ border: '1px solid purple', width: '80%', margin: '0 auto' }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid blue', color:'purple' }}>Welcome to Music App, your ultimate destination for music discovery and enjoyment. Our app is designed to provide you with a seamless music experience, allowing you to easily discover new music, create playlists, and share your favorite tunes with your friends.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid blue',color:'purple' }}>Our app is powered by the Spotify API, which allows us to provide you with access to millions of songs from thousands of artists around the world. Whether you're into pop, rock, hip hop, or jazz, we've got you covered.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid blue',color:'purple' }}>Our team of dedicated developers and music lovers are constantly working to improve the app and add new features, so stay tuned for updates and new releases. We hope you enjoy using Music App as much as we enjoy building it!</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}