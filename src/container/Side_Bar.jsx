import React from 'react';
import './Side_Bar.scss';
import User from '../assets/user.png';

const Side_Bar = () => {
  return (
    <nav>
      <div>
        <img src={User} alt="User_Img" />
      </div>
    </nav>
  )
}

export default Side_Bar