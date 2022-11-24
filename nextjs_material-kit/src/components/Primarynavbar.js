import React from 'react'
import { FaCompass } from 'react-icons/fa'
import { HiUserCircle } from "react-icons/hi";
import { MdSettings } from 'react-icons/md';

function Primarynavbar() {
return (
    <div>
      <div className="primary-nav-container">
        <button className="primary-txt">
					<a href="#" className="primary-btn-txt">
						Primary Color
					</a>
					<a href="#" className="primary-discover-txt">
            <FaCompass className='primary-discover-icon'/>
						Discover
					</a>
					<a href="#" className="primary-profile-txt">
            <HiUserCircle className='primary-profile-icon'/>
						Profile
					</a>
					<a href="#" className="primary-setting-txt">
            <MdSettings className='primary-setting-icon'/>
						Setting
					</a>
				</button>
        </div>
    </div>
)
}

export default Primarynavbar
