import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { CgMenuGridR } from "react-icons/cg";
import { ImBoxRemove } from "react-icons/im";
import { IoMdArrowDropdown, IoMdCloudDownload } from "react-icons/io";

function Topnavbar() {
return (
    <div>
      <div className="top-nav">NextJS Material Kit
      <a href="#"><CgMenuGridR />COMPONENTS<IoMdArrowDropdown /></a>
        <a href="#"><ImBoxRemove />UPGRADE TO PRO</a>
        <a href="#"><IoMdCloudDownload /> DOWNLOAD</a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookSquare /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  )
}

export default Topnavbar
