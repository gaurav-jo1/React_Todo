import React from 'react';
import './Side_Bar.scss';
import User from '../assets/user.png';
import {BsFillSunFill} from 'react-icons/bs';
import {VscStarFull} from 'react-icons/vsc';
import {RiFileListFill} from 'react-icons/ri';
import {FaRegHandPointRight} from 'react-icons/fa';
import {MdOutlineStarOutline} from 'react-icons/md';
import { Link } from "react-router-dom";


const Side_Bar = () => {
  return (
    <nav>
      <div className='UserName' > 
        <img src={User} alt="User_Img" />
        <h2>Gaurav Joshi</h2>
      </div>
      <ul>
          <Link className='link_all' to="/MyDay"> <div className='blueLine'/> &nbsp; <BsFillSunFill/> &nbsp; My Day</Link>
          <Link className='link_all' to="/Important"> <div className='blueLine'/> &nbsp; <MdOutlineStarOutline  style={{color:'gold'}} /> &nbsp; Important</Link>
          <Link className='link_all' to=""> <div className='blueLine'/> &nbsp; <RiFileListFill style={{color:'skyblue'}} /> &nbsp; Planned</Link>
      </ul>
      <div className='one_line'/>
      <ul>
          <Link className='link_all' to="/"> <div className='blueLine'/> &nbsp; <FaRegHandPointRight style={{color:'yellow'}} /> &nbsp; Getting Started</Link>
      </ul>
    </nav>
  )
}

export default Side_Bar