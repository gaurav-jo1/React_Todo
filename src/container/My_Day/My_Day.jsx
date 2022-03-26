import React, { useState } from "react";
import "./My_Day.scss";
import { BiChevronRightCircle } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import {Side_Bar} from "../../components";

const My_Day = () => {
  return (
    <>
    <Side_Bar/>
    <div className="main_Background">
      <div className="upperContainer">
        <h1>My Day</h1>
        <div className="MyDayLine" />

        <div className="list_of_Todo">
          <p>This is my first task ...............</p>
          <h5>
            <AiOutlineStar />
          </h5>
        </div>
      </div>

      <div className="adding_task_div">
        <div>
          <h3>
            <BiChevronRightCircle />
          </h3>
          <input
            type="text"
            placeholder=" Add a task...  😃"
          />
        </div>
        <button type="button">
          <FaPlus />
        </button>
      </div>
    </div>
    </>
  );
};

export default My_Day;
