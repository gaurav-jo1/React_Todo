import React from 'react';
import './Side_Bar.scss';
import User from '../assets/user.png';
import {BsFillSunFill} from 'react-icons/bs';
import {VscStarFull} from 'react-icons/vsc';
import {RiFileListFill} from 'react-icons/ri';
import {FaRegHandPointRight} from 'react-icons/fa';
import {MdOutlineStarOutline} from 'react-icons/md';


const Side_Bar = () => {
  return (
    <nav>
      <div className='UserName' > 
        <img src={User} alt="User_Img" />
        <h2>Gaurav Joshi</h2>
      </div>
      <ul>
          <li> <div className='blueLine'/> &nbsp; <BsFillSunFill/> &nbsp; My Day</li>
          <li> <div className='blueLine'/> &nbsp; <MdOutlineStarOutline  style={{color:'gold'}} /> &nbsp; Important</li>
          <li> <div className='blueLine'/> &nbsp; <RiFileListFill style={{color:'skyblue'}} /> &nbsp; Planned</li>
      </ul>
      <div className='one_line'/>
      <ul>
          <li> <div className='blueLine'/> &nbsp; <FaRegHandPointRight style={{color:'yellow'}} /> &nbsp; Getting Started</li>
      </ul>
    </nav>
  )
}

export default Side_Bar