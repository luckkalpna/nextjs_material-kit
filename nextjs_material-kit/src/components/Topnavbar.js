import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { CgMenuGridR } from "react-icons/cg";
import { ImBoxRemove } from "react-icons/im";
import { IoMdArrowDropdown, IoMdCloudDownload } from "react-icons/io";

function Topnavbar() {
return (
    <div>
      <div className="top-nav">NextJS Material Kit
        <a href="#" className='nav-comp-txt'><CgMenuGridR className='nav-comp-icon'/>COMPONENTS<IoMdArrowDropdown className='nav-comparrow-icon'/></a>
        <a href="#" className='nav-pro-txt'><ImBoxRemove className='nav-pro-icon'/>UPGRADE TO PRO</a>
        <a href="#" className='nav-download-txt'><IoMdCloudDownload className='nav-download-icon'/> DOWNLOAD</a>
        <a href="#" className='nav-twit-icon'><FaTwitter /></a>
        <a href="#" className='nav-fb-icon'><FaFacebookSquare /></a>
        <a href="#" className='nav-insta-icon'><FaInstagram /></a>
      </div>
    </div>
  )
}

export default Topnavbar
