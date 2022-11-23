import React from 'react'
import { useState } from 'react';
import {MdEmail, MdFace, MdSettings, MdArrowDropDown} from "react-icons/md";

function Navbarwithicons() {

  const [isActive, setActive] = useState(false);

  return (
    <div>
      <div className="navigationwithicon-container">
        <div className="navigationwithicon-txt">Icons</div>
        <div className="mail-icon">
          <MdEmail />
        </div>
        <div className="face-icon">
          <MdFace />
        </div>
        <div className="setting-icon" onClick={(e) => setActive(!isActive)}>
          <MdSettings /><MdArrowDropDown />
        </div>
        {isActive && (
                  <div className="setting-dropdown-content">
                    <p className='setting-dropdown-content-txt'>Dropdown Header</p>
									<div className="setting-dropdown-item">
                  <a href="#" className="setting-dropdown-item">Action</a>
                  </div>
									<div className="setting-dropdown-item">
                  <a href="#" className="setting-dropdown-item">Another action</a>
                  </div>
									<div className="setting-dropdown-item">
                  <a href="#" className="setting-dropdown-item">Something else here</a>
                  </div> <hr />
									<div className="setting-dropdown-item">
                  <a href="#" className="setting-dropdown-item">Separated link</a>
                  </div> <hr /> 
									<div className="setting-dropdown-item">
                  <a href="#" className="setting-dropdown-item">One more separated link</a>
                  </div>
								</div>
                )}
      </div>
    </div>
  )
}

export default Navbarwithicons
