import React from 'react'

function Navbarwithprofile() {
  return (
    <div>
      <div className="profile-nav-container">
        <button className="profile-txt">
          <a href="#" className="profile-btn-txt">
            Navbar with profile
          </a>
          <a href="#" className="profile-discover">
            DISCOVER
          </a>
          <a href="#" className="profile-wishlist">
            PROFILE
          </a>
          <button className='register-btn'><a href="#" className="register-txt">
            REGISTER
          </a></button>
        </button>
      </div>
    </div>
  )
}

export default Navbarwithprofile
