// import React from 'react'
import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MICHAEL LAY
          </a>
          <div className="itemContainer">
            <Person className="icons" />
            <span>+1 (804) 475-7889</span>
          </div>
          <div className="itemContainer">
            <Email className="icons" />
            <span>michaellay2689@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
