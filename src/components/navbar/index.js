import React from "react";
import "./navbar.css";
import { navbar } from "../../asserts/image";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="navLeft">
          <img src={navbar.logo} />
        </div>
        <div className="navRight">
          <div className="navRight-left">
            <button>Dashboard</button>
            <button>Students</button>
            <button>Shared</button>
            <button>Question</button>
            <button>Test</button>
            <button>Report</button>
            <button>Configuration</button>
          </div>
          <div className="navRight-rigth">
            <img src={navbar.profile} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
