import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='Left'>
          <img src={require('./Logo-01 4.png')} />
        </div>
        <div className='Right'>
          <p id='loginBtn'>Login</p>
          <button id='registerBtn'>Register</button>
        </div>
    </div>
  )
}

export default Navbar