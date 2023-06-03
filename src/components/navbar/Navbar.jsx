import React from 'react'
import "./NavBar.scss"

function Navbar() {
  return (
    <div className='navBar'>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>

        {/* links */}
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button className='button'>Join</button>
        </div>
      </div>
    </div>
  )
}

// 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
export default Navbar