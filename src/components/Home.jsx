import React from "react";
import "./Home.scss";
import { Side_Bar } from "../components";

const Home = () => {
  return (
    <>
    <Side_Bar/>
      <div className="Home_Background">
        <h1>Start Planning Your Day...</h1>
      </div>
    </>
  );
};

export default Home;
