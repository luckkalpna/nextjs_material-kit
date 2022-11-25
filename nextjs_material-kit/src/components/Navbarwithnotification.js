import React from 'react'
import { MdMail } from 'react-icons/md';

function Navbarwithnotification() {
return (
    <div>
      <div className="notification-nav-container">
				<button className="notification-txt">
					<a href="#" className="notification-btn-txt">
						Navbar with notificatiions
					</a>
					<a href="#" className="notification-discover-txt">
						DISCOVER
					</a>
					<a href="#" className="notification-wishlist-txt">
						WISHLIST
					</a>
					<a href="#" className="notification-setting-txt">
						<MdMail />
					</a>
          <div className="nav-profile">
            <img src="image/profiletype.jpg" alt="image" className="nav-profile"/>
          </div>
				</button>
			</div>
    </div>
)
}

export default Navbarwithnotification
