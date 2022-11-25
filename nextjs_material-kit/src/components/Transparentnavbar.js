import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

function Transparentnavbar() {
return (
    <div>
      <div className="transparent-nav-container">
        <button className="transparent-txt">
					<a href="#" className="transparent-btn-txt">
						Transparent
					</a>
					<a href="#" className="transparent-twitter-txt">
            <FaTwitter className="transparent-twitter-icon"/>
						TWITTER
					</a>
					<a href="#" className="transparent-facebook-txt">
            <FaFacebookSquare className="transparent-facebook-icon"/>
						FACEBOOK
					</a>
					<a href="#" className="transparent-instagram-txt">
            <FaInstagram className="transparent-instagram-icon"/>
						INSTAGRAM
					</a>
				</button>
        </div>
    </div>
  )
}

export default Transparentnavbar
