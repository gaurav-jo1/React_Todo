import React from 'react';
import './My_Day.scss';
import {AiOutlineUpCircle} from 'react-icons/ai';

const My_Day = () => {
  return (

    <div className='main_Background'>
      <h1>My Day</h1>


      <input className='Input_Add'  type="text" name="myDay_task" placeholder="Try typing 'Exercise by 5 PM' "   />
      <input className='Input_Submit'  type="submit" value="+" />

    </div>
  )
}

export default My_Day