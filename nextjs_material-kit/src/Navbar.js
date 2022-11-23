import React from 'react';
import './App.css';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

function Navbar() {

const [isActive, setActive] = useState(false);

  return (
    <div>
      <nav>
      <div className="navbar">
              <button className='menu-btn'><a href="#" className='menu-btn'>Menu</a></button>
							<a href="#" className='menu-btn-link1'>LINK</a>
							<a href="#" className='menu-btn-link2'>LINK</a>
							<div className="dropdown">
								<button className="dropdown-btn" onClick={(e) => setActive(!isActive)}>
									DROPDOWN
									<MdArrowDropDown className='dropdown-icon'/>
								</button>
								{isActive && (
                  <div className="dropdown-content">
                    <p className='dropdown-content-txt'>Dropdown Header</p>
									<div className="dropdown-item">
                  <a href="#" className="dropdown-item">Action</a>
                  </div>
									<div className="dropdown-item">
                  <a href="#" className="dropdown-item">Another action</a>
                  </div>
									<div className="dropdown-item">
                  <a href="#" className="dropdown-item">Something else here</a>
                  </div> <hr />
									<div className="dropdown-item">
                  <a href="#" className="dropdown-item">Separated link</a>
                  </div> <hr /> 
									<div className="dropdown-item">
                  <a href="#" className="dropdown-item">One more separated link</a>
                  </div>
								</div>
                )}
							</div>
						</div>
            </nav>
    </div>
  )
}

export default Navbar
